import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import ScheduleItem from "@/components/Schedule/ScheduleItem";
import ScheduleAdd from "@/components/Schedule/ScheduleAdd";
import {LESSONS} from "@/app/API";


const days = [
    'ВС',
    'ПН',
    'ВТ',
    'СР',
    'ЧТ',
    'ПТ',
    'СБ'
];

export default function ScheduleDay() {
    const lesson = LESSONS[0][1]
    console.log(lesson.date)
    const date = new Date(lesson.date)
    const thisDay = days[date.getDay()]
    const thisDate = date.getDate() + '.' + Number(date.getMonth() + 1)

    console.log(thisDate)
    return(
        <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: 20,
            padding: 10,
            borderColor: 'grey',
            borderTopWidth: 1
        }}>
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                <Text style={{fontSize: 27}}>{thisDay}</Text>
                <Text style={{fontSize: 15}}>{thisDate}</Text>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 10, width: '100%', paddingRight: 50}}>
                <ScheduleItem lesson={LESSONS[0][1]}/>
                <ScheduleItem/>
                <ScheduleItem/>
                <ScheduleItem/>
                <ScheduleAdd/>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
    },
});
