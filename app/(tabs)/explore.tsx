import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, Image, Platform, View, Text, Touchable, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from "react";
import ChooseWeek from "@/components/Schedule/ChooseWeek";
import WeekSchedule from "@/components/Schedule/WeekSchedule";


export default function TabTwoScreen() {
    const [nowWeek, setNowWeek] = useState(0)
    let nowDate = +new Date()
    const nowYear = new Date(nowDate).getFullYear()
    const calcNowWeek = (date: any) => {
        let x = Math.ceil((date - +new Date(nowYear, 0, 1)) / 7 / 24 / 60 / 60 / 1000)
        setNowWeek(x)
    }
    useEffect(() => {
        calcNowWeek(nowDate)
    }, []);
  return (
    <View style={styles.container}>
        {nowWeek !== 0 ? <ChooseWeek setNowWeek={setNowWeek} nowWeek={nowWeek} /> : <Text>LOADING</Text>}
        {nowWeek !== 0 ? <WeekSchedule /> : <Text>LOADING</Text>}


    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        // justifyContent: "center",
        height: "100%"
    },
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
