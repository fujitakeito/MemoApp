import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

export default function MemoList() {
    return (
        <View>
            <View>
                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>Shopping List</Text>
                        <Text style={styles.memoListItemDate}>20203年5月18日 10:00</Text>
                    </View>
                    <View>
                        <Entypo name="cross" size={24} color="#b0b0b0" />
                    </View>
                </View>

                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>Shopping List</Text>
                        <Text style={styles.memoListItemDate}>20203年5月18日 10:00</Text>
                    </View>
                    <View>
                        <Entypo name="cross" size={24} color="#b0b0b0" />
                    </View>
                </View>

                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>Shopping List</Text>
                        <Text style={styles.memoListItemDate}>20203年5月18日 10:00</Text>
                    </View>
                    <View>
                        <Entypo name="cross" size={24} color="#b0b0b0" />
                    </View>
                </View>

                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>Shopping List</Text>
                        <Text style={styles.memoListItemDate}>20203年5月18日 10:00</Text>
                    </View>
                    <View>
                        <Entypo name="cross" size={24} color="#b0b0b0" />
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
})