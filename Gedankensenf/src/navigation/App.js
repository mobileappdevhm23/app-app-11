import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Senfabgabe from '../pages/Senfabgabe';
import * as Notifications from 'expo-notifications';
import Senfgespeichert from '../pages/Senfgespeichert';
import SignIn from '../AuthStack/SignIn';
import "../config/firebase";
import SignUp from "../AuthStack/SignUp"
import Senflesen from '../pages/Senflesen';

// import PushNotification from '../pages/PushNotification';
// import messaging from '@react-native-firebase/messaging';

// First, set the handler that will cause the notification
// to show the alert


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// Second, call the method

Notifications.scheduleNotificationAsync({
  content: {
    title: 'Willkommen zu Gedankensenf',
    body: "Registriere dich jetzt und schließe dich der Senf Gemeinschaft an!",
  },
  trigger: null,
});





const Stack = createNativeStackNavigator();

const App = () => {

  const Stack = createNativeStackNavigator();

  // // für Push Notifications mit firebase
  //   useEffect(() => {
  //     const requestUserPermission = async () => {
  //       const authStatus = await messaging().requestPermission();
  //       console.log('Authorization status:', authStatus);
  //     };

  //     const registerAppWithFCM = async () => {
  //       await messaging().registerDeviceForRemoteMessages();
  //     };

  //     const checkInitialNotification = async () => {
  //       const initialNotification = await messaging().getInitialNotification();
  //       if (initialNotification) {
  //         console.log('Notification caused app to open:', initialNotification);
  //       }
  //     };

  //     const onMessageReceived = async (remoteMessage) => {
  //       console.log('A new FCM message arrived!', remoteMessage);
  //       // Handle the received message
  //     };

  //     const unsubscribeForeground = messaging().onMessage(onMessageReceived);

  //     // Request permission and register the app with FCM
  //     requestUserPermission();
  //     registerAppWithFCM();
  //     checkInitialNotification();

  //     return () => {
  //       unsubscribeForeground();
  //     };
  //   }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="PushNotification"
          component={PushNotification}
        /> */}
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Senfabgabe"
          component={Senfabgabe}
        />
        <Stack.Screen
          name="Senflesen"
          component={Senflesen}
        />
        <Stack.Screen
          name="Senfgespeichert"
          component={Senfgespeichert}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;