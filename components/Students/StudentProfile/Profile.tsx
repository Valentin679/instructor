import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import ModalProfile from "@/app/students/modal-profile";
import {Select} from "antd";
import Grade from "@/components/Students/StudentProfile/Grades/Grade";
import {router, useLocalSearchParams} from "expo-router";
import {getStudentById, getStudents} from "@/api/fetchStudents";

// const DATA = [
//     {
//         slug: 'trestle',
//         name: 'Эстакада',
//         level: 'Полностью освоен'
//     },
//     {
//         slug: 'parallelParking',
//         name: 'Параллельная парковка',
//         level: 'Изредка требуется подсказка'
//     },
//     {
//         slug: 'garage',
//         name: 'Гараж',
//         level: 'Часто требуется подсказка'
//     },
//     {
//         slug: 'move',
//         name: 'Движение прямо',
//         level: 'Ознакомлен'
//     },
//     {
//         slug: 'leftTurn',
//         name: 'Поворот налево',
//         level: 'Ознакомлен'
//     },
//     {
//         slug: 'rightTurn',
//         name: 'Поворот направо',
//         level: 'Не изучено'
//     }
// ]


const grades = [
    {value: 5, label: 'Полностью освоен'},
    {value: 4, label: 'Изредка требуется подсказка'},
    {value: 3, label: 'Часто требуется подсказка'},
    {value: 2, label: 'Ознакомлен'},
    {value: 1, label: 'Не изучено'},
]
export default function Profile() {

    const params = useLocalSearchParams<{ id?: string }>();
    const [studentId, setStudentId] = useState(params.id);
    const [student, setStudent]: any = useState()
    // const [exercise, setExercise] = useState()
    useEffect(() => {
        getStudentById(studentId).then(res => setStudent(res))
    }, [studentId]);

    console.log(student)
    if (!student) {
        return <Text>Loading</Text>
    } else {
        return (
            <View style={{padding: 10}}>
                <View style={{flexDirection: 'row', gap: 20, marginBottom: 20}}>
                    <Image source={require('../../../assets/images/profile.jpg')}
                           style={{width: 50, height: 100, objectFit: 'cover'}}/>
                    <View style={{flexDirection: 'column', gap: 10}}>
                        <View style={{flexDirection: 'column', gap: 7}}>
                            <Text>{student.firstName}</Text>
                            <Text>{student.lastName}</Text>
                            <Text>{student.surname}</Text>
                        </View>
                        <View>
                            <Text>Группа: {student.group}</Text>
                        </View>
                    </View>

                </View>
                <View>
                    {// @ts-ignore
                        student.exercise.map(el => {
                            // console.log(el)
                            return (<Grade key={el.slug} grade={el}/>)
                        })}
                </View>
            </View>)
    }
}
const styles = StyleSheet.create({});
