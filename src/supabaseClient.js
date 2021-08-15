const supabaseUrl = "https://tllwalunhfijyrkybkhs.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODg1NjY4MSwiZXhwIjoxOTQ0NDMyNjgxfQ._6-WDEwOyw6yNvQB6XZAODVisLnsgQJyjtqzh1F669Y";

const spb = supabase.createClient(supabaseUrl, supabaseAnonKey);
export default spb;
