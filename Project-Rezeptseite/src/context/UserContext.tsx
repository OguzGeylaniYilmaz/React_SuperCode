import { createContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase/supabaseClient";

type UserContextType = {
  user: string;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const UserContext = createContext<UserContextType | null>(null);
export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
  }, []);

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
