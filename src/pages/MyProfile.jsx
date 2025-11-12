import React, { useContext, useState } from "react";
import { AuthContext } from "../components/AuthProvider";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, updateProfileFunction, setUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async () => {
    if (!displayName || !photoURL) {
      toast.error("Name and photo URL cannot be empty");
      return;
    }

    setLoading(true);
    try {
      await updateProfileFunction(displayName, photoURL);
      toast.success("Profile updated successfully!");
      setUser({ ...user, displayName, photoURL });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="bg-[#2f4f4f] rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>

        <div className="flex flex-col items-center gap-4 mb-6">
          <img
            src={photoURL || "/default-avatar.png"}
            alt="User Avatar"
            className="w-32 h-32 object-cover rounded-full border-2 border-green-600"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="input w-full rounded-lg border-gray-300"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Photo URL
            </label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input w-full rounded-lg border-gray-300"
              placeholder="Photo URL"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              value={user?.email || ""}
              className="input w-full rounded-lg"
            />
          </div>

          <button
            onClick={handleUpdateProfile}
            className={`btn btn-green mt-4 w-full ${loading ? "loading" : ""}`}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
