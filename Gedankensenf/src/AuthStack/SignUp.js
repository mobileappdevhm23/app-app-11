import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useNavigation } from "@react-navigation/native";
import { Image } from 'react-native';
// Code wurde mithilfe des Codes aus dem Projekt Firebase-Auth-in-Expo (https://github.com/liegsalz/Firebase-Auth-in-Expo) aufgesetzt
// es lassen sind hier viele Elemnte aus dem Code wiederzufinden

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
      navigation.navigate("Home");
    } catch (error) {
      setValue({
        ...value,
        error: error instanceof FirebaseError ? error.message : "unknown error",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../img/Senf.png')} style={styles.backgroundImage} />

      <Text style={styles.title}>Gedankensenf</Text>
      <Text style={styles.text}>Melde dich jetzt an und gebe deinen Senf ab!</Text>

      {value.error && (
        <View style={styles.error}>
          <Text>{value.error}</Text>
        </View>
      )}

      <View style={styles.controls}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
        />

        <Button title="Registrieren" buttonStyle={styles.control} onPress={signUp} />
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.text}>du hast schon einen Account?</Text>
        <Button title="Log in" buttonStyle={styles.smallControl} onPress={() => navigation.navigate('SignIn')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "#343434",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: '#E6B31E',
    fontSize: 25,
    fontWeight: 600,
    marginTop: 80,
  },
  text: {
    color: 'white',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 15,
  },
  controls: {
    flex: 1,
    width: 400,
    height: 40,
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 25,
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'white',
  },
  control: {
    marginTop: 50,
    backgroundColor: '#E6B31E',
    paddingVertical: 12,
    paddingHorizontal: 45,
    borderRadius: 25,
    marginBottom: 10,
    alignSelf: 'center',
  },
  backgroundImage: {
    bottom: -5,
    left: 1,
    height: 330,
    width: 335,
    resizeMode: 'contain',
    position: 'absolute',
    resizeMode: 'cover',
    opacity: 0.5,
    zIndex: -1,
  },
  error: {
    marginTop: 10,
    padding: 10,
    color: "#000000",
    backgroundColor: "#D54826FF",
  },
  signupContainer: {
    flex: 0,
    flexDirection: "row",
  },
  smallControl: {
    backgroundColor: '#343434',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 25,
    borderColor: '#fff',
    marginBottom: 10,
    borderWidth: 1,
    alignSelf: 'center',
    marginLeft: 15,
    marginBottom: 30,
  },
});
