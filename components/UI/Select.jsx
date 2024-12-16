import {StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
import React from "react"
import RNPickerSelect from 'react-native-picker-select';

export default function Select({options, onChange, placeholder}) {
    return (
        <RNPickerSelect
            onValueChange={onChange}
            placeholder={placeholder}
            items={options}
        />
    )
}
const styles = StyleSheet.create({
    input: {
        marginTop: '.5rem',
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        color: '#353c44',
        borderColor: '#e1e1e1',
        borderRadius: '0.375rem',
        paddingVertical: '0.375rem',
        paddingHorizontal: '0.75rem',
        lineHeight: '1.5rem',
        fontSize: "1rem",
    },
});
