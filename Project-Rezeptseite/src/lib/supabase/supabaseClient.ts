import { createClient } from "@supabase/supabase-js";
import { Database } from "../../types/supabase-types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Supabase URL or Anon Key is not defined in the environment variables."
  );
}

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export { supabase };
