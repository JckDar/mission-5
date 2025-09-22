// src/supabase/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Ganti dengan URL dan anon key dari project Supabase kamu
const supabaseUrl = 'https://erfhlvequmarsxyrqjvk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyZmhsdmVxdW1hcnN4eXJxanZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNTUwNzAsImV4cCI6MjA3MzkzMTA3MH0.6iSarm3F7C2ZBDYMEY7JKJkLF1qfDfCL5YCrVv2ImJU';

// Inisialisasi client Supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
