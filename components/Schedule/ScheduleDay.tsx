import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect} from "react";
import {LESSONS} from "@/app/API";
import ScheduleItem from "@/components/Schedule/ScheduleItem";
import AddScheduleItem from "@/components/Schedule/AddScheduleItem";

const lessons = LESSONS[0]

const days = [
    'ПН',
    'ВТ',
    'СР',
    'ЧТ',
    'ПТ',
    'СБ',
    'ВС',
];

export default function ScheduleDay({currentDate}) {
    // const schedule = day.map(lesson => {
    //     return <ScheduleItem nowWeek={nowWeek} key={lesson.id} lesson={lesson}/>
    // })
    // console.log(lessons)
    const currentDay = new Date(currentDate.getDate())
    const schedule = lessons.filter(lesson => {
        let lessonDay = new Date(lesson.date).getDate()
        // console.log(lessonDate)
        if (lessonDay === Number(currentDay)) {
            return lesson
        }
    })
    console.log(schedule)//сортировка по дате
    const lessonsInDay = schedule.map(lesson => {
        return <ScheduleItem key={lesson.id} lesson={lesson}/>
    })
    useEffect(() => {

    }, [currentDate]);
    return(
        <View style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: 20,
            padding: 10,
        }}>
            {lessonsInDay}
            <AddScheduleItem/>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
    },
});
