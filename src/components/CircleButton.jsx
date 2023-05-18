import { StyleSheet, View } from 'react-native'
import React from 'react'
import { string, shape } from 'prop-types'
import { Entypo } from '@expo/vector-icons';

export default function CircleButton(props) {

    const { style, name } = props;

    return (
        <View style={[styles.circleButton, style]}>
            <Entypo name={name} size={32} color="white" />
        </View>
    )
}

CircleButton.propTypes = {
    style: shape(),
    name: string.isRequired,
}

CircleButton.defaultProps = {
    style: null,
}

const styles = StyleSheet.create({
    circleButton: {
        backgroundColor: "#467fd3",
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 40,
        bottom: 40,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8,
    },
    circleButtonLabel: {
        color: "white",
        fontSize: 40,
        lineHeight: 40,
    },
})