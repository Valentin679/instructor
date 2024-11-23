import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

export default function ScheduleItem({lesson, nowWeek}) {
    // console.log(lesson)
    const time = new Date(lesson.date)
    const hours = time.getUTCHours()
    const minutes = time.getUTCMinutes()
    if (nowWeek === lesson.week) {
    return(
        <TouchableOpacity>
            <Text style={{
                borderWidth: 1,
                borderColor: 'green',
                borderRadius: 5,
                fontSize: 15,
                paddingHorizontal: 5,
                paddingVertical: 3,
                height: 30
            }}>{hours}:{minutes === 0 ? '00' : minutes}</Text>
        </TouchableOpacity>
    )
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
    },
});
