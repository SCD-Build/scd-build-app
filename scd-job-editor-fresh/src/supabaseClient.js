import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://vrvifhiqmdwbtqnfzvfy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZydmlmaGlxbWR3YnRxbmZ6dmZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNTIyMTgsImV4cCI6MjA2MzcyODIxOH0.fj0-V2ryV19iIQbciwzIHEflOgTq5Eo_FqbjuJ-iH9k';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);