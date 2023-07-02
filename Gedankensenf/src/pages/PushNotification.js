import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';

export default function PushNotification() {
  const navigation = useNavigation();

  const requestUserPermisson = async () => {
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  useEffect(() => {
    const getToken = async () => {
      if (requestUserPermisson()) {
        // return fcm token for device
        const token = await messaging().getToken();
        console.log(token);

        // Send FCM-POST-Anfrage
        await fetch('https://fcm.googleapis.com/fcm/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `AAAAUXtS26E:APA91bGeavrnPN_5r3p7OYXWpUBIGGDqm7pTPWzgx9cUyk3C7zXqFhA9MK3UmhVvHKHwTanmtHhILOX9d4mg7HK8S9oAo0EIE6li3Fdi978e_0npmg89d_vkakcXwGet3cgSRxVYR9gN`,
          },
          body: JSON.stringify({
            to: token,
            priority: 'normal',
            data: {
              title: "📧 You've got mail",
              message: 'Hello world! 🌐',
            },
          }),
        });
      }
      else {
        console.log("Failed token status", authStatus);
      }
    }

    getToken();

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });

    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(async (remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      // Navigation zum Datentyp
      //navigation.navigate(remoteMessage.data.type);
    });

    // Register background handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    const getTokenAsync = async () => {
      const token = (await Notifications.getDevicePushTokenAsync()).data;
      console.log(token);
    };

    getTokenAsync();

    return unsubscribe;
  }, [])

  return (
    <View>
      <Text>Gedankensenf</Text>
      <StatusBar style='auto'/>
    </View>
  );
}

