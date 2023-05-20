import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MemoList() {

    const navigation = useNavigation();

    return (
        <View>
            <View>
                <TouchableOpacity
                    style={styles.memoListItem}
                    onPress={() => { navigation.navigate("MemoDetail") }}
                >
                    <View>
                        <Text style={styles.memoListItemTitle}>Shopping List</Text>
                        <Text style={styles.memoListItemDate}>20203年5月18日 10:00</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.memoDelete}
                        onPress={() => { Alert.alert('are you sure?') }}
                    >
                        <Entypo name="cross" size={24} color="#b0b0b0" />
                    </TouchableOpacity>
                </TouchableOpacity>



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
    memoDelete: {
        padding: 8,
    }
})