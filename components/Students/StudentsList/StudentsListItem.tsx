import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {Link, router} from "expo-router";


export default function StudentsListItem({student}: any) {
    const [exercise, setExercise]: any = useState(student.exercise)
    // @ts-ignore
    const goodExerc = exercise?.filter(e => {
        return e.level === 'Полностью освоен'
    })
    // @ts-ignore
    const badExerc = exercise?.filter(e => {
        return e.level !== 'Изредка требуется подсказка' && e.level !== 'Полностью освоен'
    })
    // console.log(exercise)
    return (
        // <Link href="/students/modal-profile/">
        <View>
            <TouchableOpacity onPress={() => {
                router.push(`/students/modal-profile?id=${student._id}`)
            }} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 5}}>
                    <Text style={styles.group}>{student.group}</Text>
                    <Text
                        style={{fontSize: 25}}>{student.firstName} {student.lastName[0].toUpperCase()}. {student.surname[0].toUpperCase()}. </Text>
                </View>
                <Text style={{color: 'green'}}>{student.status.label}</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                <View style={{flexDirection: 'row', gap: 5}}>
                    <Text style={{fontSize: 15, color: 'green'}}>{goodExerc?.at(-1).name}</Text>
                    <Text> {goodExerc?.length === 0 ? '' : '-->'} </Text>
                    <Text style={{fontSize: 15, color: 'purple'}}>{badExerc?.at(0).name}</Text>
                </View>
                <View>
                    <Text>{student.quantityPracticalLessons <= 27 ?
                        student.quantityPracticalLessons + '/27' :
                        student.quantityPracticalLessons - 27 + 'ДП'
                    }</Text>
                </View>
            </View>
        </View>
        // </Link>
    )
}
const styles = StyleSheet.create({
    group: {
        fontSize: 20,
        backgroundColor: '#76b716',
        borderRadius: '50%',
        paddingVertical: 5,
        paddingHorizontal: 5,
        textAlign: 'center',
        width: 100,
    }
});
