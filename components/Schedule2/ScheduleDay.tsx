import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import ScheduleItem from "@/components/Schedule2/ScheduleItem";
import ScheduleAdd from "@/components/Schedule2/ScheduleAdd";


const days = [
    'ПН',
    'ВТ',
    'СР',
    'ЧТ',
    'ПТ',
    'СБ',
    'ВС',
];

export default function ScheduleDay({day, id, date, nowWeek}) {
    const schedule = day.map(lesson => {
        return <ScheduleItem nowWeek={nowWeek} key={lesson.id} lesson={lesson}/>
    })
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
                <Text style={{fontSize: 27}}>{days[id]}</Text>
                <Text style={{fontSize: 15}}>{date}</Text>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 10, width: '100%', paddingRight: 50}}>
                {schedule}
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
