
import { createClient } from "@supabase/supabase-js";

// These environment variables are automatically injected by Lovable/Supabase integration
const supabaseUrl = "https://dodomiysjrrpdwzpplrl.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvZG9taXlzanJycGR3enBwbHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5OTY2NTYsImV4cCI6MjA2NTU3MjY1Nn0.0lX97XUzYq9bZXMLvDtEucflnghPo7HarbxGQKXvjMY";

// Debug logging
console.log('Supabase URL:', supabaseUrl ? 'Present' : 'Missing');
console.log('Supabase Anon Key:', supabaseAnonKey ? 'Present' : 'Missing');

// Validate environment variables
if (!supabaseUrl) {
  throw new Error('VITE_SUPABASE_URL is not defined. Please ensure your Lovable project is properly connected to Supabase.');
}

if (!supabaseAnonKey) {
  throw new Error('VITE_SUPABASE_ANON_KEY is not defined. Please ensure your Lovable project is properly connected to Supabase.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
