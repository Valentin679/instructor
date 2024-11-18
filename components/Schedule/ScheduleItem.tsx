import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

export default function ScheduleItem({lesson}) {
// console.log(lesson)
    return(
        <TouchableOpacity>
            <Text style={{
                borderWidth: 1,
                borderColor: 'green',
                borderRadius: 5,
                fontSize: 15,
                paddingHorizontal: 5,
                paddingVertical: 3,
                height: 30
            }}>10:00</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
    },
});
