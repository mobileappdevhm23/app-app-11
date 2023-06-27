import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, Text } from 'react-native';

export default function Senfgespeichert() {
    return (
        <View style={styles.container}>
            <Image source={require('../img/Senf.png')} style={styles.backgroundImage} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Vielen Dank!</Text>
                <Text style={styles.text}>dein Senf wurde gespeichert!</Text>
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
    title: {
        color: '#E6B31E',
        fontSize: 30,
        fontWeight: 600,
    },
    text: {
        color: 'white',
        fontSize: 20,
        marginTop: 5,
    }
})