import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";


export default function Senfabgabe() {
    const navigation = useNavigation();
    const [text, onChangeText] = useState('');
    const auth = getAuth();
    const userId = auth.currentUser.uid;
    const db = getDatabase();



    const handleConfirm = async () => {
        try {
            // Speichern des Texts in Firebase unter der Benutzer-ID
            await set(ref(db, 'inputs/' + userId), text);

            // Navigieren zum Bestätigungsbildschirm
            navigation.navigate('Senflesen');
        } catch (error) {
            console.error("Fehler beim Speichern des Texts:", error);
        }
    };


    return (
        <View style={styles.container}>
            <Image source={require('../img/Senf.png')} style={styles.backgroundImage} />
            <View style={styles.contentContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='gib deinen Senf ab...'
                    placeholderTextColor='grey'
                    multiline={true}
                    textAlignVertical="top"
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleConfirm}
                    // onPress={() => navigation.navigate('Senfgespeichert')}
                    // onPress={handleConfirm}
                    >
                        <Text style={styles.buttonText}>Fertig</Text>
                    </TouchableOpacity>
                </View>
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
        marginTop: -100,
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 320,
        height: 250,
        margin: 12,
        borderWidth: 0.5,
        borderRadius: 15,
        borderColor: hexToRgba('#A7A7A7', 0.9),
        backgroundColor: hexToRgba('#FCFAF1', 0.9),
        padding: 10,
    },
    buttonContainer: {
        alignItems: 'center',
        paddingLeft: 100,
        paddingTop: 20,
    },
    button: {
        backgroundColor: '#E6B31E',
        paddingVertical: 15,
        paddingHorizontal: 45,
        borderRadius: 25,
        marginBottom: 10,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'baseline',
        justifyContent: 'center',
    },
    backgroundImage: {
        bottom: -5,
        left: 1,
        height: 330,
        width: 335,
        resizeMode: 'contain',
        position: 'absolute',
        resizeMode: 'cover',
        opacity: 0.8,
        zIndex: -1,
    },
});