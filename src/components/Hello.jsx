import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { string, bool, shape } from 'prop-types';

function Hello(props) {
    const {children, bang, style} = props;
    return (
        <View>
            <Text style={[styles.text, style]}>
                {`Hello ${children}${bang ? '!' : ''}`}
            </Text>
        </View>
    );
}

Hello.propTypes = {
    children: string.isRequired,
    bang: bool,
    style: shape(),
}

Hello.defaultProps = {
    bang: false,
    style: null,
}

export default Hello

const styles = StyleSheet.create({
    text: {
        color: "white",
        backgroundColor: "blue",
        fontSize: 40,
        fontWeight: "bold",
        padding: 16,
    },
})