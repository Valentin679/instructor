import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect} from "react";
import {CaretLeftFilled, CaretRightFilled} from "@ant-design/icons";

export default function ChooseWeek({setNowWeek, nowWeek, setDatesNowWeek}) {
//Количество дней от 1 января до понедельника этой недели
    const daysFromFirstDayOfCurYear = nowWeek * 7 - 6;
//1 января текущего года
    const firstDayOfCurYear = new Date();
    firstDayOfCurYear.setFullYear(firstDayOfCurYear.getFullYear(), 0, 0);
//Точная дата понедельника для заданной недели
    const datesNowWeek = new Array()
    const dateOfMondayInWeek = new Date(firstDayOfCurYear.valueOf() + daysFromFirstDayOfCurYear * 24 * 60 * 60 * 1000 );
    const dateOfTuesdayInWeek = new Date(dateOfMondayInWeek.valueOf()  + 86400000);
    const dateOfWednesdayInWeek = new Date(dateOfTuesdayInWeek.valueOf()  + 86400000);
    const dateOfThursdayInWeek = new Date(dateOfWednesdayInWeek.valueOf() + 86400000 );
    const dateOfFridayInWeek = new Date(dateOfThursdayInWeek.valueOf() + 86400000);
    const dateOfSaturdayInWeek = new Date(dateOfFridayInWeek.valueOf() + 86400000);
    const dateOfSundayInWeek = new Date(firstDayOfCurYear.valueOf() + daysFromFirstDayOfCurYear * 24 * 60 * 60 * 1000 + 518400000);

    datesNowWeek.push(dateOfMondayInWeek.getDate() + '.' + Number(dateOfMondayInWeek.getMonth() + 1))
    datesNowWeek.push(dateOfTuesdayInWeek.getDate() + '.' + Number(dateOfTuesdayInWeek.getMonth() + 1))
    datesNowWeek.push(dateOfWednesdayInWeek.getDate() + '.' + Number(dateOfWednesdayInWeek.getMonth() + 1))
    datesNowWeek.push(dateOfThursdayInWeek.getDate() + '.' + Number(dateOfThursdayInWeek.getMonth() + 1))
    datesNowWeek.push(dateOfFridayInWeek.getDate() + '.' + Number(dateOfFridayInWeek.getMonth() + 1))
    datesNowWeek.push(dateOfSaturdayInWeek.getDate() + '.' + Number(dateOfSaturdayInWeek.getMonth() + 1))
    datesNowWeek.push(dateOfSundayInWeek.getDate() + '.' + Number(dateOfSundayInWeek.getMonth() + 1))

    useEffect(() => {
        setDatesNowWeek(datesNowWeek)
    }, [datesNowWeek[0]]);

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
