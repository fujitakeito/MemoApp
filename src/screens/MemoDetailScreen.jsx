import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import CircleButton from '../components/CircleButton'

export default function MemoDetailScreen(props) {

    const { navigation } = props;

    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2023:5:18 10:00</Text>
            </View>
            <View>
                <ScrollView style={styles.memoBody}>
                    <Text style={styles.memoText}>
                        買い物リスト
                        You have to going to supermarket to buy fresh vegetables.
                        You got wake up at 7:00 am.
                        Because There's not good vegetables in afternoon.
                        This is your today's mission.
                        Do not forget!
                    </Text>
                </ScrollView>
            </View>

            <CircleButton 
            style={{top: 60, bottom: "auto"}} 
            name='edit'
            onPress={() => { navigation.navigate("MemoEdit") }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    memoHeader: {
        backgroundColor: "#467fd3",
        height: 96,
        justifyContent: "center",
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle: {
        color: "#fff",
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "bold",
    },
    memoDate: {
        color: "#fff",
        fontSize: 12,
        lineHeight: 16,
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoText: {
        fontSize: 16,
        lineHeight: 24,
    }
})