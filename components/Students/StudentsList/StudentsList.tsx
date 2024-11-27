import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import StudentsListItem from "@/components/Students/StudentsList/StudentsListItem";


export default function StudentsList() {
    return(
        <View>
            <StudentsListItem/>
        </View>)
}
const styles = StyleSheet.create({

});
