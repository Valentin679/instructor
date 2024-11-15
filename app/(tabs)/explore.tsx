import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, Image, Platform, View, Text, Touchable, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from "react";

function ChooseWeek({setNowWeek, nowWeek}) {
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
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity onPress={()=>{
            setNowWeek(nowWeek - 1)
        }}><Text style={styles.text}> Пред. </Text></TouchableOpacity>
        <Text style={styles.text}> {formatDate(dateOfMondayInWeek)} - {formatDate(dateOfSundayInWeek)}</Text>
        <TouchableOpacity onPress={()=>{
            setNowWeek(nowWeek + 1)
        }}><Text style={styles.text}> След. </Text></TouchableOpacity>
      </View>
  )
}

export default function TabTwoScreen() {
    const [nowWeek, setNowWeek] = useState(0)
    let nowDate = +new Date()
    const nowYear = new Date(nowDate).getFullYear()
    const calcNowWeek = (date) => {
        let x = Math.ceil((date - +new Date(nowYear, 0, 1)) / 7 / 24 / 60 / 60 / 1000)
        setNowWeek(x)
    }
    useEffect(() => {
        calcNowWeek(nowDate)
    }, []);
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text>Explore</Text>
      </View>
        {nowWeek !== 0 ? <ChooseWeek setNowWeek={setNowWeek} nowWeek={nowWeek} /> : <Text>LOADING</Text>}


    </View>
  );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
    },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
