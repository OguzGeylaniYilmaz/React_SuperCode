import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase/supabaseClient";
import { User } from "@supabase/supabase-js";

interface Profile {
  user_id: string;
  first_name: string;
  last_name: string;
  created_at: string | null;
  updated_at: string | null;
  last_login_at: string | null;
}

const UserProfile = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUserData(user);

      if (!user) return;

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user?.id)
        .single();

      setProfile(data);
    };

    fetchUserData;
  }, []);

  if (userData) {
    return (
      <div>
        <h1>Profile</h1>
        <p>First Name: {profile?.first_name}</p>
        <p>Last Name: {profile?.last_name}</p>
        <p>Created At: {profile?.created_at}</p>
        <p>Updated At: {profile?.updated_at}</p>
        <p>Last Login At: {profile?.last_login_at}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Loading...</p>
    </div>
  );
};

export default UserProfile;
