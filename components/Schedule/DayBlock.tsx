import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {CaretLeftFilled, CaretRightFilled} from "@ant-design/icons";


export default function DayBlock({item, currentDate, setCurrentDate}) {
    let idBlock = new Date(item.date).getDate() +1
    // console.log(idBlock)
    return(
        <TouchableOpacity id={idBlock}
                          style={new Date().getDate() === item.id ? styles.dayBlockActive : styles.dayBlock}
                          onPress={()=>{
                              let newDate = new Date().setUTCDate(idBlock)
                              setCurrentDate(new Date(newDate))
                              // console.log(currentDate)
                          }}
        >
            <Text style={new Date(currentDate).getDate() === item.id ? styles.dayBlockDateActive : styles.dayBlockDate}>{item.id}</Text>
            <Text style={new Date(currentDate).getDate() === item.id ? styles.dayBlockWeekDayActive : styles.dayBlockWeekDay}>{item.day}</Text>
        </TouchableOpacity>)
}
const styles = StyleSheet.create({

    dayBlock: {
        borderRadius: 10,
        backgroundColor: '#f6f6f6',
        color: 'grey',
        width: 60,
        height: 70,
        marginHorizontal: 10,
    },
    dayBlockActive: {
        borderRadius: 10,
        borderColor: '#ba0017',
        borderWidth: 1,
        color: 'black',
        width: 60,
        height: 70,
        marginHorizontal: 10,
    },
    dayBlockDate: {
        fontSize: 30,
        textAlign: "center",
        color: 'grey'
    },
    dayBlockDateActive: {
        color: 'black',
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    dayBlockWeekDay: {
        fontSize: 15,
        textAlign: "center",
        color: 'grey'
    },
    dayBlockWeekDayActive: {
        color: 'black',
        fontSize: 15,
        textAlign: "center",
    },

    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
