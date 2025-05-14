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

    fetchUserData();
  }, []);

  if (userData) {
    return (
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl overflow-hidden mt-8">
        <div className="bg-indigo-600 p-5">
          <h1 className="text-white text-2xl font-semibold">User Profile</h1>
        </div>

        <div className="p-6 space-y-6">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">First Name</dt>
              <dd className="mt-1 text-lg font-normal text-gray-900">
                {profile?.first_name ?? "—"}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Last Name</dt>
              <dd className="mt-1 text-lg font-normal text-gray-900">
                {profile?.last_name ?? "—"}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Created At</dt>
              <dd className="mt-1 text-lg font-normal text-gray-900">
                {profile?.created_at
                  ? new Date(profile.created_at).toLocaleDateString()
                  : "—"}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Updated At</dt>
              <dd className="mt-1 text-lg font-normal text-gray-900">
                {profile?.updated_at
                  ? new Date(profile.updated_at).toLocaleDateString()
                  : "—"}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">
                Last Login At
              </dt>
              <dd className="mt-1 text-lg font-normal text-gray-900">
                {profile?.last_login_at
                  ? new Date(profile.last_login_at).toLocaleString()
                  : "—"}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center">Profile</h1>
      <p>Loading...</p>
    </div>
  );
};

export default UserProfile;
