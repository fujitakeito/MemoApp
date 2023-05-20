import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, } from 'react-native'
import React from 'react'
import CircleButton from '../components/CircleButton'
import { Entypo } from '@expo/vector-icons'

export default function MemoEditScreen(props) {

    const { navigation } = props;

    return (
        <KeyboardAvoidingView style={styles.container} behavior='height'>
                <View style={styles.inputContainer}>
                    <TextInput value='Shopping List' multiline style={styles.input} />
                </View>
                <CircleButton 
                name='check'
                onPress={() => { navigation.goBack() }}
                />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        paddingHorizontal: 27,
        paddingVertical: 32,
        flex: 1
    },
    input: {
        flex: 1,
        textAlignVertical: "top",
        fontSize: 16,
        lineHeight: 24,
    }
})