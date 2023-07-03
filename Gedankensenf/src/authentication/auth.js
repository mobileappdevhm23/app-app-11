// Code wurde mithilfe des Codes aus dem Projekt Firebase-Auth-in-Expo (https://github.com/liegsalz/Firebase-Auth-in-Expo) aufgesetzt
// es lassen sind hier viele Elemnte aus dem Code wiederzufinden

const auth = firebase.auth();

export const useAuthentication = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubOnStateChanged = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // The user is signed in
        setUser(user);
      } else {
        // The user is not signed in
        setUser(undefined);
      }
    });

    return unsubOnStateChanged;
  }, []);

  return {
    user,
  };
};
