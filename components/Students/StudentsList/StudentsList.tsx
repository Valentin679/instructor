import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import StudentsListItem from "@/components/Students/StudentsList/StudentsListItem";
import {Link} from "expo-router";
import {Button} from "antd";
import {getStudents} from "@/api/fetchStudents";


export default function StudentsList() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        getStudents().then(res => setStudents(res))
    }, []);


    const studentsList = students.map(student => (
                <StudentsListItem key={student._id} student={student} />
    ))
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
            <Button type={"primary"}>Добавить ученика</Button>
        </Link>
    </View>)
}
const styles = StyleSheet.create({});
