import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AppBar() {
    return (
        <View>
            <View style={styles.appBar}>
                <View style={styles.appBarInner}>
                    <Text style={styles.appBarTitle}>Memo App</Text>
                    <Text style={styles.appBarRight}>Logout</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appBar: {
        width: "100%",
        height: 104,
        backgroundColor: "#467fd3",
        justifyContent: "flex-end",
    },
    appBarInner: {
        alignItems: "center",
    },
    appBarRight: {
        position: "absolute",
        right: 19,
        bottom: 16,
        color: "rgba(255, 255, 255, 0.8)"
    },
    appBarTitle: {
        marginBottom: 8,
        fontSize: 22,
        lineHeight: 32,
        color: '#ffffff',
        fontWeight: "bold"
    },
    memoListItem: {
        backgroundColor: "#ffff",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.15)",
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32,
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: "#848484",
    },
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
    }
})