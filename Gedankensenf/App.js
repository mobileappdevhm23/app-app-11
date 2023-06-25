import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Senfabgabe from './Senfabgabe';

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
        {/* Weitere Bildschirme hinzufügen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;