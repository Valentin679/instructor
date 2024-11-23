import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect} from "react";

export default function ScheduleItem({lesson}) {
    const hours = new Date(lesson.date).getUTCHours()
    const minutes = new Date(lesson.date).getUTCMinutes()
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={{fontSize: 25}}>
                {hours + ':' + (minutes === 0 ? minutes + '0' : minutes)}
            </Text>
            <Text style={{fontSize: 20}}>
                {lesson.studentName}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        fontSize: 25,
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
    },
});
