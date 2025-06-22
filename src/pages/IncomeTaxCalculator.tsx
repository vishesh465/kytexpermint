import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import calculateTaxBreakdown from "../utils/taxCalculation";
import ContactDialog from "../components/ContactDialog";

// Form state interfaces
interface TaxpayerDetails {
  pan: string;
  name: string;
  regime: "new" | "old";
  assessmentYear: string;
  category: "individual" | "huf" | "firm" | "llp" | "company";
  residentialStatus: "resident" | "non-resident";
  ageBand: "below60" | "above60" | "above80";
}

interface IncomeDetails {
  salary: string;
  houseProperty: string;
  capitalGains: string;
  business: string;
  other: string;
}

interface DeductionDetails {
  section80C: string;
  section80D: string;
  section24B: string;
  nps: string;
}

const defaultTaxpayerDetails: TaxpayerDetails = {
  pan: "",
  name: "",
  regime: "new",
  assessmentYear: "2025-26",
  category: "individual",
  residentialStatus: "resident",
  ageBand: "below60",
};

const defaultIncomeDetails: IncomeDetails = {
  salary: "",
  houseProperty: "",
  capitalGains: "",
  business: "",
  other: "",
};

const defaultDeductionDetails: DeductionDetails = {
  section80C: "",
  section80D: "",
  section24B: "",
  nps: "",
};

export default function IncomeTaxCalculator() {
  const [taxpayerDetails, setTaxpayerDetails] = useState<TaxpayerDetails>(defaultTaxpayerDetails);
  const [incomeDetails, setIncomeDetails] = useState<IncomeDetails>(defaultIncomeDetails);
  const [deductionDetails, setDeductionDetails] = useState<DeductionDetails>(defaultDeductionDetails);
  const [result, setResult] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTaxpayerChange = (field: keyof TaxpayerDetails, value: string) => {
    setTaxpayerDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncomeDetails(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDeductionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeductionDetails(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert string values to numbers, defaulting to 0 if empty
    const incomeData = {
      salary: parseFloat(incomeDetails.salary) || 0,
      houseProperty: parseFloat(incomeDetails.houseProperty) || 0,
      capitalGains: parseFloat(incomeDetails.capitalGains) || 0,
      business: parseFloat(incomeDetails.business) || 0,
      other: parseFloat(incomeDetails.other) || 0,
    };

    const deductionData = {
      section80C: parseFloat(deductionDetails.section80C) || 0,
      section80D: parseFloat(deductionDetails.section80D) || 0,
      section24B: parseFloat(deductionDetails.section24B) || 0,
      nps: parseFloat(deductionDetails.nps) || 0,
    };

    const investmentData = {
      ppf: 0,
      elss: 0,
      nsc: 0,
      fd: 0,
      other: 0,
    };

    const breakdown = calculateTaxBreakdown(incomeData, deductionData, investmentData, taxpayerDetails);
    setResult(breakdown);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Prepare tax calculation data for contact form
  const taxCalculationData = result ? {
    grossIncome: result.grossIncome,
    totalDeductions: result.totalDeductions,
    taxableIncome: result.taxableIncome,
    calculatedTax: result.tax,
    totalTaxPayable: result.totalTax,
    fullCalculationData: {
      taxpayerDetails,
      incomeDetails,
      deductionDetails,
      result
    }
  } : undefined;

  return (
    <div className="min-h-screen bg-gray-50">
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
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
              <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Testimonials</Link>
              <Link to="/tax-calculator" className="text-blue-600 font-medium">Tax Calculator</Link>
              <ContactDialog taxCalculationData={taxCalculationData} />
            </nav>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
                <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
                <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Testimonials</Link>
                <Link to="/tax-calculator" className="text-blue-600 font-medium">Tax Calculator</Link>
                <div className="pt-2">
                  <ContactDialog taxCalculationData={taxCalculationData} />
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Income Tax Calculator</h1>
          </div>
          <p className="text-xl text-gray-600">Calculate your tax liability for FY 2024-25 (AY 2025-26)</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Taxpayer Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Step 1: Taxpayer Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="pan">PAN Number *</Label>
                  <Input
                    id="pan"
                    name="pan"
                    value={taxpayerDetails.pan}
                    onChange={(e) => handleTaxpayerChange('pan', e.target.value.toUpperCase())}
                    placeholder="ABCDE1234F"
                    maxLength={10}
                    className="uppercase"
                  />
                </div>
                <div>
                  <Label htmlFor="name">Name of Taxpayer *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={taxpayerDetails.name}
                    onChange={(e) => handleTaxpayerChange('name', e.target.value)}
                    placeholder="Enter full name"
                  />
                </div>
              </div>

              {/* Tax Regime Selection */}
              <div>
                <Label className="text-base font-medium">Tax Regime *</Label>
                <RadioGroup
                  value={taxpayerDetails.regime}
                  onValueChange={(value) => handleTaxpayerChange('regime', value)}
                  className="flex flex-col space-y-2 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="new" id="new-regime" />
                    <Label htmlFor="new-regime" className="cursor-pointer">
                      New Tax Regime (Default) - Higher basic exemption, no deductions
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="old" id="old-regime" />
                    <Label htmlFor="old-regime" className="cursor-pointer">
                      Old Tax Regime - Lower basic exemption, deductions allowed
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Other Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="category">Taxpayer Category</Label>
                  <Select value={taxpayerDetails.category} onValueChange={(value) => handleTaxpayerChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual</SelectItem>
                      <SelectItem value="huf">HUF (Hindu Undivided Family)</SelectItem>
                      <SelectItem value="firm">Partnership Firm</SelectItem>
                      <SelectItem value="llp">LLP (Limited Liability Partnership)</SelectItem>
                      <SelectItem value="company">Company</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="residentialStatus">Residential Status</Label>
                  <Select value={taxpayerDetails.residentialStatus} onValueChange={(value) => handleTaxpayerChange('residentialStatus', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="resident">Resident</SelectItem>
                      <SelectItem value="non-resident">Non-Resident</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="ageBand">Age Category</Label>
                  <Select value={taxpayerDetails.ageBand} onValueChange={(value) => handleTaxpayerChange('ageBand', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="below60">Below 60 years</SelectItem>
                      <SelectItem value="above60">60-80 years (Senior Citizen)</SelectItem>
                      <SelectItem value="above80">Above 80 years (Super Senior Citizen)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="assessmentYear">Assessment Year</Label>
                <Select value={taxpayerDetails.assessmentYear} onValueChange={(value) => handleTaxpayerChange('assessmentYear', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select assessment year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025-26">AY 2025-26 (FY 2024-25)</SelectItem>
                    <SelectItem value="2024-25">AY 2024-25 (FY 2023-24)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Step 2: Income Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Step 2: Income Details (FY 2024-25)</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="salary">Salary Income</Label>
                <Input
                  id="salary"
                  name="salary"
                  type="number"
                  value={incomeDetails.salary}
                  onChange={handleIncomeChange}
                  placeholder="Enter salary amount"
                />
              </div>
              <div>
                <Label htmlFor="houseProperty">House Property Income</Label>
                <Input
                  id="houseProperty"
                  name="houseProperty"
                  type="number"
                  value={incomeDetails.houseProperty}
                  onChange={handleIncomeChange}
                  placeholder="Enter house property income"
                />
              </div>
              <div>
                <Label htmlFor="capitalGains">Capital Gains</Label>
                <Input
                  id="capitalGains"
                  name="capitalGains"
                  type="number"
                  value={incomeDetails.capitalGains}
                  onChange={handleIncomeChange}
                  placeholder="Enter capital gains"
                />
              </div>
              <div>
                <Label htmlFor="business">Business/Profession Income</Label>
                <Input
                  id="business"
                  name="business"
                  type="number"
                  value={incomeDetails.business}
                  onChange={handleIncomeChange}
                  placeholder="Enter business income"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="other">Other Sources Income</Label>
                <Input
                  id="other"
                  name="other"
                  type="number"
                  value={incomeDetails.other}
                  onChange={handleIncomeChange}
                  placeholder="Enter other income"
                />
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Deductions (Only for Old Regime) */}
          {taxpayerDetails.regime === "old" && (
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Step 3: Deductions (Old Regime Only)</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="section80C">Section 80C (PPF, ELSS, LIC, etc.)</Label>
                  <Input
                    id="section80C"
                    name="section80C"
                    type="number"
                    value={deductionDetails.section80C}
                    onChange={handleDeductionChange}
                    placeholder="Max ₹1,50,000"
                  />
                </div>
                <div>
                  <Label htmlFor="section80D">Section 80D (Medical Insurance)</Label>
                  <Input
                    id="section80D"
                    name="section80D"
                    type="number"
                    value={deductionDetails.section80D}
                    onChange={handleDeductionChange}
                    placeholder="Max ₹25,000"
                  />
                </div>
                <div>
                  <Label htmlFor="section24B">Section 24(b) (Home Loan Interest)</Label>
                  <Input
                    id="section24B"
                    name="section24B"
                    type="number"
                    value={deductionDetails.section24B}
                    onChange={handleDeductionChange}
                    placeholder="Max ₹2,00,000"
                  />
                </div>
                <div>
                  <Label htmlFor="nps">NPS (Additional 80CCD(1B))</Label>
                  <Input
                    id="nps"
                    name="nps"
                    type="number"
                    value={deductionDetails.nps}
                    onChange={handleDeductionChange}
                    placeholder="Max ₹50,000"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          <Button type="submit" size="lg" className="w-full">
            <Calculator className="mr-2 h-5 w-5" />
            Calculate Tax
          </Button>
        </form>

        {/* Results */}
        {result && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-xl">Tax Calculation Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Taxpayer:</span>
                    <span>{taxpayerDetails.name || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">PAN:</span>
                    <span>{taxpayerDetails.pan || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Tax Regime:</span>
                    <span className="capitalize">{taxpayerDetails.regime} Regime</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Age Category:</span>
                    <span>
                      {taxpayerDetails.ageBand === 'below60' ? 'Below 60 years' :
                       taxpayerDetails.ageBand === 'above60' ? 'Senior Citizen (60-80)' :
                       'Super Senior Citizen (80+)'}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Gross Income:</span>
                    <span>{formatCurrency(result.grossIncome)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Total Deductions:</span>
                    <span>{formatCurrency(result.totalDeductions)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Taxable Income:</span>
                    <span>{formatCurrency(result.taxableIncome)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-blue-600">
                    <span>Total Tax Payable:</span>
                    <span>{formatCurrency(result.totalTax)}</span>
                  </div>
                </div>
              </div>
              
              {result.slabs.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Tax Slab Breakdown:</h4>
                  <div className="space-y-2">
                    {result.slabs.map((slab, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>
                          {slab.upto ? `Up to ₹${slab.upto.toLocaleString()}` : `Above previous slab`} 
                          @ {slab.rate}%:
                        </span>
                        <span>{formatCurrency((slab.amount || 0) * slab.rate / 100)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mb-6 p-3 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">{result.notes}</p>
              </div>

              {/* Contact Us Section for Tax Results */}
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <p className="text-blue-800 mb-3">
                  Need professional help with tax planning or filing? Get expert consultation!
                </p>
                <ContactDialog taxCalculationData={taxCalculationData} />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
