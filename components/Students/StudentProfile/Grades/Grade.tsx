import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import ModalProfile from "@/app/students/modal-profile";
import {Select} from "antd";

const selectList = [
    { value: 5, label: 'Полностью освоен' },
    { value: 4, label: 'Изредка требуется подсказка' },
    { value: 3, label: 'Часто требуется подсказка' },
    { value: 2, label: 'Ознакомлен' },
    { value: 1, label: 'Не изучено' },
]



export default function Grade({grade}: any) {
// console.log(grade)
    const [exercise, setExercise] = useState(grade.name)
    const [level, setLevel] = useState(grade.level)
// console.log(grade)
    useEffect(() => {

        // console.log(level)
    }, [level]);
    return (
                <View key={grade.slug} style={{flexDirection: 'row', marginBottom: 5,  gap: 20, justifyContent: 'space-between'}}>
                    <Text key={grade.slug}>{exercise}</Text>
                    {level === selectList[0].label ? <Text style={{color: 'green'}}>{level}</Text> :

                    <Select
                        id={grade.slug}
                        defaultValue={level}
                        options={selectList}
                        size={"small"}
                        onChange={(value, option)=>{
                            if ("label" in option) {
                                setLevel(option.label)
                            }
                        }}
                    >
                    </Select>
                    }
                </View>)
}
const styles = StyleSheet.create({});
