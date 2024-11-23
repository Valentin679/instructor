import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {PlusCircleOutlined} from "@ant-design/icons";

export default function ScheduleAdd() {

    return(
        <TouchableOpacity>
            <Text style={{
                paddingHorizontal: 5,
                paddingVertical: 5,
                height: 30
            }}><PlusCircleOutlined style={{ fontSize: '23px'}}/></Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
    },
});
