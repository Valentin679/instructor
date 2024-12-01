import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import ModalProfile from "@/app/students/modal-profile";
import {Select} from "antd";
import Grade from "@/components/Students/StudentProfile/Grades/Grade";

const DATA = [
    {
        slug: 'trestle',
        name: 'Эстакада',
        level: 'Полностью освоен'
    },
    {
        slug: 'parallelParking',
        name: 'Параллельная парковка',
        level: 'Изредка требуется подсказка'
    },
    {
        slug: 'garage',
        name: 'Гараж',
        level: 'Часто требуется подсказка'
    },
    {
        slug: 'move',
        name: 'Движение прямо',
        level: 'Ознакомлен'
    },
    {
        slug: 'leftTurn',
        name: 'Поворот налево',
        level: 'Ознакомлен'
    },
    {
        slug: 'rightTurn',
        name: 'Поворот направо',
        level: 'Не изучено'
    }
]


const grades = [
    {value: 5, label: 'Полностью освоен'},
    {value: 4, label: 'Изредка требуется подсказка'},
    {value: 3, label: 'Часто требуется подсказка'},
    {value: 2, label: 'Ознакомлен'},
    {value: 1, label: 'Не изучено'},
]
export default function Profile() {



    let list = DATA.map(el => {
        console.log(el)
        return (<Grade key={el.slug} grade={el}/>)
    })
    return (
            <View style={{padding: 10,}}>
                {list}

            </View>)
}
const styles = StyleSheet.create({});
