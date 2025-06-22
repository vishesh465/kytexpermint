
-- Create consultations table to store form submissions
CREATE TABLE public.consultations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - making it public for now since this is a contact form
ALTER TABLE public.consultations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert consultation requests (public contact form)
CREATE POLICY "Anyone can submit consultations" 
  ON public.consultations 
  FOR INSERT 
  WITH CHECK (true);

-- Allow reading consultations (you can restrict this later if needed)
CREATE POLICY "Anyone can view consultations" 
  ON public.consultations 
  FOR SELECT 
  USING (true);
