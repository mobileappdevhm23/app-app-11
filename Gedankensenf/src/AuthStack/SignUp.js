import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useNavigation } from "@react-navigation/native";

export default function SignUpScreen() {
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
    <View style={styles.container}>
      <Text>Sign in screen!</Text>

      {value.error && (
        <View style={styles.error}>
          <Text>{value.error}</Text>
        </View>
      )}

      <View style={styles.controls}>
        <TextInput
          placeholder="Email"
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
        />

        <TextInput
          placeholder="Password"
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
        />

        <Button title="Sign in" buttonStyle={styles.control} onPress={signUp} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
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
});
