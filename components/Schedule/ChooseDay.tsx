import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import DayBlock from "@/components/Schedule/DayBlock";


export default function ChooseDay({nowDate, currentDate, setCurrentDate}) {
    const nowMonthIndex = Number(new Date(nowDate.getFullYear(), nowDate.getMonth(), 1));
    const nextMonthIndex =  Number(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 1));
    const daysInNowMonth = Math.round((nextMonthIndex - nowMonthIndex) / 1000 / 3600 / 24);

    // console.log(nowDate.setUTCFullYear(2025, 11, 18));
    // console.log(new Date('2024-11-18T10:30:57.864Z') + 'eeee');

    let days = [];
    let weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    for (let i = 1; i <= daysInNowMonth; i++) {
        let date = new Date(2024, nowMonthIndex / 1000 / 3600 / 24 - 1, i-1);
        days.push({
            id: i,
            day: weekDays[date.getDay()],
            date: date
        });
        // console.log(days)
    }
    useEffect(() => {
        // console.log(new Date(currentDate))
    }, [currentDate]);

    return(
        <FlatList  data={days}
                   horizontal={true}
                   renderItem={({item}) => <DayBlock setCurrentDate={setCurrentDate} currentDate={currentDate} item={item}/>}
            // keyExtractor={item => item.id}
                   showsHorizontalScrollIndicator={false}
                   initialScrollIndex={nowDate.getDate() -1}
                   getItemLayout={(_, index) => ({
                       length: 60 + 20, //  WIDTH + (MARGIN_HORIZONTAL * 2)
                       offset: (60 + 20) * (index),  //  ( WIDTH + (MARGIN_HORIZONTAL*2) ) * (index)
                       index,
                   })}
        />
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
    },
});
