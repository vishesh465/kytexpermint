import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calculator, 
  FileText, 
  Building2, 
  Users,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { supabase } from "@/lib/supabaseClient";

const consultationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ConsultationForm = z.infer<typeof consultationSchema>;

const Consultation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<ConsultationForm>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (data: ConsultationForm) => {
    console.log('Consultation form submitted:', data);
    // Save to Supabase table 'consultations'
    const { error } = await supabase.from('consultations').insert([
      {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
      }
    ]);
    if (error) {
      console.error("Failed to save inquiry:", error);
      toast({
        title: "Submission Failed",
        description: "An error occurred. Please try again or contact us directly.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Request Submitted!",
      description: "We'll contact you within 24 hours for your free consultation.",
    });
    form.reset();
  };

  const services = [
    { value: 'tax-planning', label: 'Tax Planning', icon: Calculator },
    { value: 'tax-filing', label: 'Tax Return Filing', icon: FileText },
    { value: 'gst-filing', label: 'GST Filing', icon: Building2 },
    { value: 'corporate-tax', label: 'Corporate Taxation', icon: Users },
  ];

  const benefits = [
    'Expert advice from 100+ freelancing CAs',
    'Personalized tax strategy consultation',
    'Modern solutions for complex tax issues',
    'Free initial assessment of your tax situation',
    'No obligation - completely free consultation'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/6f9be28c-0028-4e58-9cf4-f247b041baea.png" 
                alt="Know Your Tax" 
                className="h-20 w-auto"
              />
              <div className="text-2xl font-bold text-gray-900">Know Your Tax</div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
              <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Testimonials</Link>
              <Link to="/consultation" className="text-blue-600 font-medium">Free Consultation</Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
                <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
                <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Testimonials</Link>
                <Link to="/consultation" className="text-blue-600 font-medium">Free Consultation</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Your <span className="text-blue-600">Free Tax Consultation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with our network of 100+ freelancing CAs for expert tax advice. No cost, no obligation - 
              just professional guidance tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Get</h2>
            <p className="text-lg text-gray-600">Our free consultation includes comprehensive tax guidance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Your Free Consultation</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Needed *</FormLabel>
                      <FormControl>
                        <select 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          {...field}
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service.value} value={service.value}>
                              {service.label}
                            </option>
                          ))}
                          <option value="other">Other / General Consultation</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your tax situation and what you'd like help with..."
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
                  Request Free Consultation
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Prefer to Call?</h2>
            <p className="text-blue-100">You can also reach us directly using the contact information below</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-12 w-12 text-blue-200 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-blue-100">+91 9982865465</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-12 w-12 text-blue-200 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-blue-100">info@knowyourtax.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 text-blue-200 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-blue-100">Durga Nursery Road<br />Udaipur, Rajasthan 313001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/6f9be28c-0028-4e58-9cf4-f247b041baea.png" 
                  alt="Know Your Tax" 
                  className="h-16 w-auto"
                />
                <div className="text-xl font-bold">Know Your Tax</div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for all taxation needs. Backed by 100+ freelancing CAs delivering expert advice and modern solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/services" className="hover:text-white transition-colors">Tax Planning</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Tax Return Filing</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">GST Filing</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Corporate Taxation</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                <li><Link to="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
                <li><Link to="/consultation" className="hover:text-white transition-colors">Free Consultation</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div>+91 9982865465</div>
                <div>info@knowyourtax.com</div>
                <div>Durga Nursery Road<br />Udaipur, Rajasthan 313001</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Know Your Tax. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Consultation;