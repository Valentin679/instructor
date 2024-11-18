import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import ScheduleDay from "@/components/Schedule/ScheduleDay";
import {LESSONS} from "@/app/API";

const lessons = LESSONS[0]
export default function WeekSchedule() {
    let sortLessons = new Array(7).fill([])
    console.log(lessons)
    lessons.map(lesson => {
        let date = new Date(lesson.date)
        let day = date.getDay()
        console.log(day)
        sortLessons[day].push(lesson)
        console.log('prohod')
    })

    console.log(sortLessons)


    return (
        <View>
            <ScheduleDay/>
            <ScheduleDay/>
            <ScheduleDay/>
            <ScheduleDay/>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
    },
});
