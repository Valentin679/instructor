import {StyleSheet, View} from "react-native";
import React, {useEffect, useState} from "react";
import StudentsListItem from "@/components/Students/StudentsList/StudentsListItem";
import {Link} from "expo-router";
import {getStudents} from "@/api/fetchStudents";
import Button from "@/components/UI/Button";


export default function StudentsList() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        getStudents().then(res => setStudents(res))
    }, []);


    const studentsList = students.map(student => {
        const {_id} = student;
        return (
            <StudentsListItem key={_id} student={student}/>
        );
    })
return (
    <View style={{flexDirection: 'column', gap: 10}}>
        {studentsList}
        <Link
            style={{
                //     padding: 10,
                // borderRadius: 10,
                // borderColor: 'green',
                // borderWidth: 1,
                textAlign: 'center'
            }}
            href="/students/modal-addStudent">
            <Button>Добавить ученика</Button>
        </Link>
    </View>)
}
const styles = StyleSheet.create({});
