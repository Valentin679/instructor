import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import ScheduleDay from "@/components/Schedule2/ScheduleDay";
import {LESSONS} from "@/app/API";

const lessons = LESSONS[0]
export default function WeekSchedule({datesNowWeek, nowWeek}) {
    let monday = new Array()
    let tuesday = new Array()
    let wednesday = new Array()
    let thursday = new Array()
    let friday = new Array()
    let saturday = new Array()
    let sunday = new Array()
    // let sortLessons = new Array(7).fill([])
    // console.log(lessons)
    lessons.map(lesson => {
        let date = new Date(lesson.date)
        let day = date.getDay()
        // console.log(day)
        if (day === 1) {
            monday.push(lesson)
        } else if (day === 2) {
            tuesday.push(lesson)
        } else if (day === 3) {
            wednesday.push(lesson)
        } else if (day === 4) {
            thursday.push(lesson)
        } else if (day === 5) {
            friday.push(lesson)
        } else if (day === 6) {
            saturday.push(lesson)
        } else if (day === 0) {
            sunday.push(lesson)
        }

        // console.log('prohod')
    })
    const weekSchedule = new Array()
    if (weekSchedule.length < 7) {
        weekSchedule.push(monday)
        weekSchedule.push(tuesday)
        weekSchedule.push(wednesday)
        weekSchedule.push(thursday)
        weekSchedule.push(friday)
        weekSchedule.push(saturday)
        weekSchedule.push(sunday)
        // console.log(weekSchedule)
    }

    const dayBlock = weekSchedule.map((day, index) => {
        return (<ScheduleDay nowWeek={nowWeek} date={datesNowWeek[index]} key={index} id={index} day={day}/>)
    })

    return (
        <View>
            {dayBlock}
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
    },
});
