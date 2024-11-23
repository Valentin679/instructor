import {Image, StyleSheet, Platform, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {useEffect, useRef, useState} from "react";
import ChooseDay from "@/components/Schedule/ChooseDay";
import ScheduleDay from "@/components/Schedule/ScheduleDay";

export default function ScheduleScreen() {

    const getDate = new Date()
    const [nowDate, setNowDate] = useState(getDate)
    const [currentDate, setCurrentDate] = useState(nowDate)
    return (
        <View style={styles.container}>
            <ChooseDay nowDate={nowDate} currentDate={currentDate} setCurrentDate={setCurrentDate}/>
            <ScheduleDay currentDate={currentDate}/>
        </View>
    );
}

const styles = StyleSheet.create({


    container: {backgroundColor: '#fff', paddingTop: 20, paddingHorizontal: 10},
});
