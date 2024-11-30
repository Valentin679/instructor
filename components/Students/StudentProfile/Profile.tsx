import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import Modal from "@/app/modal";
import {Select} from "antd";

const DATA = [
    {
        slug: 'trestle',
        name: 'Эстакада',
        level: 5
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

const selectList = [
    { value: 5, label: 'Полностью освоен' },
    { value: '4', label: 'Изредка требуется подсказка' },
    { value: '3', label: 'Часто требуется подсказка' },
    { value: '2', label: 'Ознакомлен' },
    { value: '1', label: 'Не изучено' },
]



export default function Profile() {

    const [trestle, setTrestle] = useState()
    const [parallelParking, setParallelParking] = useState()


    let list = DATA.map(el => {
        return (<>
            <Text key={el.slug}>{el.name}</Text>
            <Select
                id={el.slug}
                defaultValue={el.level}
                options={selectList}
            >
            </Select>
        </>)
    })
    return (
            <View>
                {list}
            </View>)
}
const styles = StyleSheet.create({});
