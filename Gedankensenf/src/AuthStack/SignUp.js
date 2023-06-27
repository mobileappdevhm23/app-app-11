import React,{useState} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function SignUpScreen () {
  const auth = getAuth();

  const navigation = useNavigation();

  const [value, setValue] = useState({
    email: "",
    password: "",
    error: "",
  });

  const signUp = async () => {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate("Sign In");
    } catch (error) {
      setValue({
        ...value,
        error: error instanceof FirebaseError ? error.message : "unknown error",
      });
    }
  };

  return (
    <div style={styles.container}>
      <h1>Sign up screen!</h1>

      {value.error && (
        <div style={styles.error}>
          <p>{value.error}</p>
        </div>
      )}

      <div style={styles.controls}>
        <input
          type="text"
          placeholder="Email"
          value={value.email}
          onChange={(event) => setValue({ ...value, email: event.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          value={value.password}
          onChange={(event) => setValue({ ...value, password: event.target.value })}
        />

        <button style={styles.control} onClick={signUp}>
          Sign up
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    paddingTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    color: "black",
    justifyContent: "center",
    flex: 1,
  },

  controls: {
    flex: 1,
    width: 400,
    height: 40,
  },

  control: {
    marginTop: 10,
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: "#000000",
    backgroundColor: "#D54826FF",
  },
};
