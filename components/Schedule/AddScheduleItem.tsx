import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect} from "react"
import Button from "@/components/UI/Button";

export default function AddScheduleItem() {
    return (

        <Button><Text style={styles.text}>Записать</Text></Button>
        // <TouchableOpacity style={styles.container}>
        //     <Text style={styles.text}>Записать</Text>
        // </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'green',
        alignItems: 'center',
        paddingTop: 2,
        paddingBottom: 7,
        fontSize: 25,
    },
    text: {
        fontSize: 20,
    },
});
