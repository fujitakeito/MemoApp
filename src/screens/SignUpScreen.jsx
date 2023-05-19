import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AppBar from '../components/AppBar'
import Button from '../components/Button'

export default function SignUpScreen() {
    return (
        <View style={styles.container}>
            <AppBar/>
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.input} value='email Address'/>
                <TextInput style={styles.input} value='password'/>
                <Button label='Submit'/>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already Registered?</Text>
                    <Text style={styles.footerLink}>LogIn here!</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f4f8",
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "bold",
        marginBottom: 24,
    },
    input: {
        fontSize: 16,
        height: 48,
        borderColor: "#dddddd",
        borderWidth: 1,
        backgroundColor: "white",
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: "#467fd3",
    },
    footer: {
        flexDirection: 'row',
    }
})