import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import * as Notifications from 'expo-notifications';
import PushNotifications from '../../PushNotification';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [expoPushToken, setExpoPushToken] = useState('');

  useEffect(() => {
    // Funktion zum Abrufen des Expo Push-Tokens
    const getExpoPushToken = async () => {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      setExpoPushToken(token);
    };

    getExpoPushToken();

    // Aufräumarbeiten
    return () => {
      Notifications.removeNotificationSubscription();
    };
  }, []);

  const handlePressNotification = async () => {
    await PushNotifications.sendPushNotification(expoPushToken);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          // onPress={handlePressNotification}
          onPress={() => navigation.navigate('Senfabgabe')}
        >
          <Text style={styles.buttonText}>Senf abgeben</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('./img/Senf.png')} style={styles.image} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#E6B31E',
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonContainer: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -25 }],
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    alignSelf: 'flex-start',
    bottom: -5,
    left: -190,
    height: 330,
    width: 330,
    resizeMode: 'contain',
    opacity: 0.8,
  },
});
