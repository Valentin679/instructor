import {StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
import React from "react"

export default function Input({onChange, placeholder, prefix}) {
    return (
        <TouchableOpacity style={{width: "100%"}}>
            <Text style={{color: '#353c44'}}>{placeholder}</Text>
            <TextInput style={styles.input} onChangeText={onChange}></TextInput>
        </TouchableOpacity>
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
