// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rrnozfrcofeecepdnbma.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJybm96ZnJjb2ZlZWNlcGRuYm1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNDUxNDcsImV4cCI6MjA2MzgyMTE0N30.c4s6aFwBQz0h0bVhpLfRdj_fsL3cn2busH2ATWe2mc0';

export const supabase = createClient(supabaseUrl, supabaseKey);
