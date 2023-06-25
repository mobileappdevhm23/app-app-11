import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import * as Notifications from 'expo-notifications';
import PushNotifications from './PushNotification';

export default function App() {
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


    // TextInput:
    const TextInputExample = () => {
        const [text, onChangeText] = React.useState('');

        // Confirm Button:
        const handleConfirm = () => {
            console.log('Bestätigter Text:', text);
        }

        return (
            <View style={styles.container}>
                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="gib deinen Senf ab..."
                        placeholderTextColor="gray"
                        multiline={true}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                        <Text style={styles.buttonText}>Fertig</Text>
                    </TouchableOpacity>

                </SafeAreaView>
                <View style={styles.imageContainer}>
                    <Image source={require('./img/Senf.png')} style={styles.image} />
                </View>

                <StatusBar style="auto" />
            </View>
        );
    }


    // converst hex color codes into rgba
    const hexToRgba = (hex, opacity) => {
        hex = hex.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#343434',
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonText: {
            color: 'white',
            fontWeight: '500',
            fontSize: 18,
        },
        button: {
            backgroundColor: '#E6B31E',
            paddingVertical: 15,
            paddingHorizontal: 45,
            borderRadius: 25,
            marginBottom: 10,
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
        input: {
            height: 150,
            margin: 12,
            borderWidth: 0.5,
            padding: 10,
            borderRadius: 10,
            borderColor: hexToRgba('#A7A7A7', 0.9),
            backgroundColor: hexToRgba('#FCFAF1', 0.5),
        },
    })
};
