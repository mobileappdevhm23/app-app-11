import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Code wurde mithilfe des Codes aus dem Projekt Firebase-Auth-in-Expo (https://github.com/liegsalz/Firebase-Auth-in-Expo) aufgesetzt
// es lassen sind hier viele Elemnte aus dem Code wiederzufinden

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
