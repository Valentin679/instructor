import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {CaretLeftFilled, CaretRightFilled} from "@ant-design/icons";

export default function ChooseWeek({setNowWeek, nowWeek}) {
//Количество дней от 1 января до понедельника этой недели
    const daysFromFirstDayOfCurYear = nowWeek * 7 - 6;
//1 января текущего года
    const firstDayOfCurYear = new Date();
    firstDayOfCurYear.setFullYear(firstDayOfCurYear.getFullYear(), 0, 0);
//Точная дата понедельника для заданной недели
    const dateOfMondayInWeek = new Date(firstDayOfCurYear.valueOf() + daysFromFirstDayOfCurYear * 24 * 60 * 60 * 1000 );
    const dateOfSundayInWeek = new Date(firstDayOfCurYear.valueOf() + daysFromFirstDayOfCurYear * 24 * 60 * 60 * 1000 + 518400000);

    function formatDate(date: Date) {

        let dd:any = date.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm:any = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        return dd + '.' + mm;
    }


    return(
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity onPress={()=>{
                setNowWeek(nowWeek - 1)
            }}><Text style={styles.text}> <CaretLeftFilled /> </Text></TouchableOpacity>
            <Text style={styles.text}> {formatDate(dateOfMondayInWeek)} - {formatDate(dateOfSundayInWeek)}</Text>
            <TouchableOpacity onPress={()=>{
                setNowWeek(nowWeek + 1)
            }}><Text style={styles.text}> <CaretRightFilled /> </Text></TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
    },
});
