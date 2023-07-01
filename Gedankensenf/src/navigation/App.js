import React from 'react';
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
    title: 'Gedankensenf',
    body: "Gebe jetzt deinen Senf ab!",
  },
  trigger: null,
});

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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