import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {Link} from "expo-router";


export default function StudentsListItem({student}) {
    // console.log(student)
    const exercise = student.exercise
    // console.log(exercise)
    // const goodExercise = exercise.map(exerc => {
    //     console.log(exerc)
    // })
    return (
        <Link href="/students/modal-profile">
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 5}}>
                    <Text style={{fontSize: 20, backgroundColor: '#76b716', borderRadius: '100%', paddingVertical: 3, paddingHorizontal: 5}}>{student.group}</Text>
                    <Text style={{fontSize: 25}}>{student.firstName}</Text>
                </View>
                <Text style={{color: 'green'}}>{student.status.label}</Text>
            </View>
            <View style={{flexDirection: 'row', gap: 5}}>
                <Text style={{fontSize: 15, color: 'green'}}>Параллельная парковка</Text>
                <Text> -- </Text>
                <Text style={{fontSize: 15, color: 'purple'}}>Гараж</Text>
            </View>
        </Link>)
}
const styles = StyleSheet.create({});
