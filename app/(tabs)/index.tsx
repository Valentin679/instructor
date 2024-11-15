import {Image, StyleSheet, Platform, View, Text, FlatList} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {useEffect, useRef} from "react";


type ItemProps = {
    item: object;
};

function DayBlock ({item: {date, day, id}}: ItemProps) {
    let idBlock = Date.parse(date)
    return(
    <View id={idBlock}
          style={new Date().getDate() === id ? styles.dayBlockActive : styles.dayBlock}>
        <Text style={new Date().getDate() === id ? styles.dayBlockDateActive : styles.dayBlockDate}>{id}</Text>
        <Text style={new Date().getDate() === id ? styles.dayBlockWeekDayActive : styles.dayBlockWeekDay}>{day}</Text>
    </View>)
};

export default function HomeScreen() {
    const nowDate = new Date()
    const nowMonthIndex = Number(new Date(nowDate.getFullYear(), nowDate.getMonth(), 1));
    const nextMonthIndex =  Number(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 1));
    const daysInNowMonth = Math.round((nextMonthIndex - nowMonthIndex) / 1000 / 3600 / 24);

    console.log(nowMonthIndex + ' дней');

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
    // useEffect(() => {
    //     flatListRef.current.scrollToIndex({
    //             animated: true,
    //             index: nowDate.getDay(),
    //     });
    // }, [nowDate]);

    return (
                <View style={{backgroundColor: '#fff'}}>
                    <Text>Main</Text>
                    <FlatList  data={days}
                               horizontal={true}
                              renderItem={({item}) => <DayBlock item={item}/>}
                              // keyExtractor={item => item.id}
                               showsHorizontalScrollIndicator={false}
                               initialScrollIndex={nowDate.getDate() -1}
                               getItemLayout={(_, index) => ({
                                   length: 60 + 20, //  WIDTH + (MARGIN_HORIZONTAL * 2)
                                   offset: (60 + 20) * (index),  //  ( WIDTH + (MARGIN_HORIZONTAL*2) ) * (index)
                                   index,
                               })}
                    />
                </View>
    );
}

const styles = StyleSheet.create({

    dayBlock: {
        borderRadius: 10,
        backgroundColor: '#f6f6f6',
        width: 60,
        height: 70,
        marginHorizontal: 10,
    },
    dayBlockActive: {
        borderRadius: 10,
        backgroundColor: '#ba0017',
        color: 'white',
        width: 60,
        height: 70,
        marginHorizontal: 10,
    },
    dayBlockDate: {
        fontSize: 30,
        textAlign: "center",
    },
    dayBlockDateActive: {
        color: 'white',
        fontSize: 30,
        textAlign: "center",
    },
    dayBlockWeekDay: {
        fontSize: 15,
        textAlign: "center",
    },
    dayBlockWeekDayActive: {
        color: 'white',
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
