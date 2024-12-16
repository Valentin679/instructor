import {StyleSheet, Text, TextInput, View} from 'react-native';
// import { Select} from "antd";
import React, {useEffect, useState} from "react";
import {addStudent} from "@/api/fetchStudents";
import {router} from "expo-router";
import Button from '@/components/UI/Button';
import Input from "@/components/UI/Input";
import Select from "@/components/UI/Select";

const statuses = [
    {
        value: 1,
        label: 'Подал документы'
    },
    {
        value: 2,
        label: 'Изучает теорию'
    },
    {
        value: 3,
        label: 'Допущен к вождению'
    },
    {
        value: 4,
        label: 'Обучение окончено'
    },
    {
        value: 5,
        label: 'Сдает экзамены'
    }
]

const instructorsList = [
    // {
    //     value: 99,
    //     label: 'Не назначен',
    //
    // },
    {
        value: 1,
        label: 'Мезенин Валентин Андреевич',

    },
    {
        value: 2,
        label: 'Давыдов Николай Николаевич',

    },
]

const exercise = [
    {
        slug: 'start',
        name: 'Начало движения',
        level: 'Полностью освоен'
    },
    {
        slug: 'trestle',
        name: 'Эстакада',
        level: 'Не изучено'
    },
    {
        slug: 'parallelParking',
        name: 'Параллельная парковка',
        level: 'Не изучено'
    },
    {
        slug: 'garage',
        name: 'Гараж',
        level: 'Не изучено'
    },
    {
        slug: 'move',
        name: 'Движение прямо',
        level: 'Не изучено'
    },
    {
        slug: 'rebuilding',
        name: 'Перестроение',
        level: 'Не изучено'
    },
    {
        slug: 'rightTurn',
        name: 'Поворот направо',
        level: 'Не изучено'
    },
    {
        slug: 'leftTurn',
        name: 'Поворот налево',
        level: 'Не изучено'
    },
    {
        slug: 'definitionIntersection',
        name: 'Определение перекрестка',
        level: 'Не изучено'
    },
    {
        slug: 'choiceLocation',
        name: 'Выбор места задания',
        level: 'Не изучено'
    },
    {
        slug: 'priority',
        name: 'Приоритет',
        level: 'Не изучено'
    },
    {
        slug: 'turn',
        name: 'Развороты',
        level: 'Не изучено'
    },
    {
        slug: 'turn3part',
        name: 'Разворот 3 приема',
        level: 'Не изучено'
    },
    {
        slug: 'speed',
        name: 'Скорость движения',
        level: 'Не изучено'
    },
    {
        slug: 'rails',
        name: 'С рельс/Не с рельс',
        level: 'Не изучено'
    },
    {
        slug: 'rings',
        name: 'Кольца',
        level: 'Не изучено'
    },
    {
        slug: 'maxSpeed',
        name: 'Максимальная скорость',
        level: 'Не изучено'
    },
    {
        slug: 'stop',
        name: 'Остановка',
        level: 'Не изучено'
    },
    {
        slug: 'tasks',
        name: 'Выполнение заданий',
        level: 'Не изучено'
    }
]
const quantityPracticalLessons = 0
export default function ModalAddStudent() {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [surname, setSurname] = useState()
    const [phone, setPhone] = useState()
    const [group, setGroup] = useState()
    const [instructor, setInstructor] = useState('')
    const [status, setStatus] = useState(statuses[0])
    useEffect(() => {
    }, [status, instructor, firstName, lastName, surname]);
    return (
        <View style={styles.container}>
            <Text>Введите данные ученика</Text>
            {/*<TextInput onChangeText={(text)=>{setFirstName(text)}} placeholder={'Фамилия'}></TextInput>*/}
            <Input onChange={(text: string) => {
                setFirstName(text)
            }} placeholder={'Фамилия'}></Input>
            <Input onChange={(text: string) => {
                setLastName(text)
            }} placeholder={'Имя'}></Input>
            <Input onChange={(text: string) => {
                setSurname(text)
            }} placeholder={'Отчество'}></Input>
            <Input onChange={(text: string) => {
                setPhone('+7' + text)
            }} prefix={'+7'} minLength={10} maxLength={10} placeholder={'Номер телефона'}></Input>
            <Input onChange={(text: string) => {
                setGroup(text)
            }} maxLength={2} placeholder={'Номер группы'}></Input>
            <Select options={statuses}
                    onChange={(value) => {
                        const statusValue = statuses.find(e => {
                            return e.value
                        })
                        console.log(statusValue)
                        setStatus(statusValue)
                    }
                    }
            />
            <Select options={instructorsList}
                    // placeholder={instructor}
                    onChange={(value) => {
                        // console.log(value)
                        const instructorValue = instructorsList.find(i => {
                            return i.value
                            // console.log(i.value)


                            // return console.log(i.value == value)
                        })

                        console.log(instructorValue)
                        setInstructor(instructorValue)
                        // console.log(instructor)
                    }
                    }
            />
            {/*<Select options={statuses} defaultValue={status}*/}
            {/*        onChange={(value, option) => {*/}
            {/*            if ("label" in option) {*/}
            {/*                // @ts-ignore*/}
            {/*                setStatus({value, label: option.label})*/}
            {/*            }*/}
            {/*        }}*/}
            {/*/>*/}
            {/*<Select options={instructors} defaultValue={instructor}*/}
            {/*        onChange={(value, option) => {*/}
            {/*            if ("label" in option) {*/}
            {/*                // @ts-ignore*/}
            {/*                setInstructor({ value, label: option.label})*/}
            {/*            }*/}
            {/*        }}/>*/}
            <Button onClick={() => {
                const data = {
                    firstName,
                    lastName,
                    surname,
                    phone,
                    group,
                    status,
                    instructor,
                    quantityPracticalLessons,
                    exercise
                }
                console.log(data)
                addStudent(data).then(res => {
                    console.log(res)
                    router.replace('/students')
                })
            }}>Добавить ученика</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        paddingHorizontal: 10
    },
});