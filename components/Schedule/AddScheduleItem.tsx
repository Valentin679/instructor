import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect} from "react";

export default function AddScheduleItem() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>Записать</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'green',
        alignItems: 'center',
        paddingVertical: 5,
        fontSize: 25,
    },
    text: {
        fontSize: 20,
    },
});
