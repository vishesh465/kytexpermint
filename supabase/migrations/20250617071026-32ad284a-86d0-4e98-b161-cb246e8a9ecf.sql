
-- Create a table for storing contact inquiries with tax calculation details
CREATE TABLE public.tax_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  message TEXT,
  -- Tax calculation details
  gross_income DECIMAL,
  total_deductions DECIMAL,
  taxable_income DECIMAL,
  calculated_tax DECIMAL,
  total_tax_payable DECIMAL,
  tax_calculation_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - making it public for contact forms
ALTER TABLE public.tax_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert (public contact form)
CREATE POLICY "Anyone can submit tax inquiries" 
  ON public.tax_inquiries 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy for viewing - only allow viewing by authenticated users (admin access)
CREATE POLICY "Authenticated users can view tax inquiries" 
  ON public.tax_inquiries 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
