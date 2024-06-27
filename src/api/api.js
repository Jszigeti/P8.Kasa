import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getProperties() {
  const { data, error } = await supabase.from("properties").select();
  if (error) throw new Error(error.message);
  return data;
}

export async function getAboutData() {
  const { data, error } = await supabase.from("aboutData").select();
  if (error) throw new Error(error.message);
  return data;
}
