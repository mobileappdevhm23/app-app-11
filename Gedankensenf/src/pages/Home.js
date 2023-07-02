import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import { useEffect, useState } from 'react';
//import * as Notifications from 'expo-notifications';
//import PushNotifications from './PushNotification';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Notifications } from 'expo';

export default function Home() {
  const navigation = useNavigation();



  // Notifications.setNotificationHandler({
  //   handleNotification: async () => ({
  //     shouldShowAlert: true,
  //     shouldPlaySound: false,
  //     shouldSetBadge: false,
  //   }),
  // });

  // // Second, call the method

  // Notifications.scheduleNotificationAsync({
  //   content: {
  //     title: 'Gedankensenf',
  //     body: "Dein täglicher Senf ist da!",
  //   },
  //   trigger: null,
  // });




  return (
    <View style={styles.container}>
      <Image source={require('../img/Senf.png')} style={styles.image} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Senfabgabe')}
        // onPress={handleConfirm}
        >
          <Text style={styles.buttonText}>Senf abgeben</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Senflesen')}
        // onPress={handleConfirm}
        >
          <Text style={styles.buttonText}>täglicher Senf</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>

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
    marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    top: '40%',
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
    left: 1,
    height: 330,
    width: 335,
    resizeMode: 'contain',
    opacity: 0.8,
    zIndex: -1,
  },
});
