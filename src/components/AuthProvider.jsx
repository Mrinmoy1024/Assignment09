import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateProfileFunction = (displayName, photoURL) => {
    if (!auth.currentUser) {
      return Promise.reject(new Error("No user is logged in"));
    }

    return updateProfile(auth.currentUser, { displayName, photoURL }).then(
      () => {
        setUser({
          ...auth.currentUser,
          displayName,
          photoURL,
        });
      }
    );
  };

  const value = {
    user,
    loading,
    setUser,
    updateProfileFunction,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
