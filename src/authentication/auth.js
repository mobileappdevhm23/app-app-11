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
