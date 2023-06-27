import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Senfabgabe from './Senfabgabe';
import * as Notifications from 'expo-notifications';
import Senfgespeichert from './Senfgespeichert';

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
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Senfabgabe"
          component={Senfabgabe}
        // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Senfgespeichert"
          component={Senfgespeichert}
        />
        {/* Weitere Bildschirme hinzufügen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;