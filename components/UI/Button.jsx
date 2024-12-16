import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react"

export default function Button({children, onClick}) {
    return (
        <TouchableOpacity onPress={onClick}>
            <Text style={styles.btn}>{children}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#0d6efd',
        alignItems: 'center',
        color: '#FFF',
        borderRadius: '0.375rem',
        paddingVertical: '0.375rem',
        paddingHorizontal: '0.75rem',
        lineHeight: '1.5rem',
        fontSize: "1rem",
    },
});
