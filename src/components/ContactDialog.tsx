
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ContactDialogProps {
  taxCalculationData?: {
    grossIncome: number;
    totalDeductions: number;
    taxableIncome: number;
    calculatedTax: number;
    totalTaxPayable: number;
    fullCalculationData: any;
  };
}

export default function ContactDialog({ taxCalculationData }: ContactDialogProps) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('tax_inquiries')
        .insert({
          name: form.name,
          phone: form.phone,
          email: form.email || null,
          message: form.message || null,
          gross_income: taxCalculationData?.grossIncome || null,
          total_deductions: taxCalculationData?.totalDeductions || null,
          taxable_income: taxCalculationData?.taxableIncome || null,
          calculated_tax: taxCalculationData?.calculatedTax || null,
          total_tax_payable: taxCalculationData?.totalTaxPayable || null,
          tax_calculation_data: taxCalculationData?.fullCalculationData || null,
        });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your inquiry has been submitted successfully. We'll get back to you soon!",
      });

      setForm({ name: "", phone: "", email: "", message: "" });
      setIsOpen(false);
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast({
        title: "Error",
        description: "Failed to submit your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Contact Us
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <Label htmlFor="email">Email (Optional)</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Any specific questions or requirements?"
              rows={3}
            />
          </div>
          {taxCalculationData && (
            <div className="p-3 bg-blue-50 rounded-lg text-sm">
              <p className="font-medium text-blue-800 mb-1">
                Tax Calculation Summary Included:
              </p>
              <p className="text-blue-600">
                Taxable Income: ₹{taxCalculationData.taxableIncome.toLocaleString()} | 
                Total Tax: ₹{taxCalculationData.totalTaxPayable.toLocaleString()}
              </p>
            </div>
          )}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
