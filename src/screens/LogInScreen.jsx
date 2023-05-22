import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import firebase from 'firebase/compat';

export default function LogInScreen(props) {
    
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('useEffect');
                navigation.reset({
                    index: 0,
                    routes: [{ name: "MemoList" }],
                });
            }
        });
        return unsubscribe;
    }, []);

    const { navigation } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handlePress() {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const { user } = userCredential;
                console.log(user.uid);
                navigation.reset({
                    index: 0,
                    routes: [{ name: "MemoList" }],
                });
            })
            .catch((error) => {
                Alert.alert(error.code);
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>LogIn</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => { setEmail(text) }}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    placeholder='Email Address'
                    textContentType='emailAddress'
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => { setPassword(text) }}
                    autoCapitalize='none'
                    secureTextEntry
                    placeholder='Password'
                    textContentType='password'
                />
                <Button
                    label='Submit'
                    onPress={handlePress}
                />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not Registered?</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: "SignUp" }],
                        })
                    }}
                    >
                        <Text style={styles.footerLink}>Sign up here!</Text>
                    </TouchableOpacity>
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