import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

export const useAuthentication = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubOnStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Der Benutzer ist angemeldet
        setUser(user);
      } else {
        // Der Benutzer ist nicht angemeldet
        setUser(undefined);
      }
    });

    return () => unsubOnStateChanged();
  }, []);

  return {
    user,
  };
};
