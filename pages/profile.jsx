import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfileEditor from "../components/ProfileEditor";
import { fetchProfile, updateProfile } from "../utils/api";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfile("123").then((res) => setProfile(res.data));
  }, []);

  const handleSave = (data) => {
    updateProfile("123", data).then((res) => setProfile(res.data));
  };

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-xl font-bold mb-2">Your Profile</h1>
        {profile ? (
          <ProfileEditor profile={profile} onSave={handleSave} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
