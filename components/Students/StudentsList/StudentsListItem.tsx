import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {Link} from "expo-router";


export default function StudentsListItem() {
    return (
        <Link href="/modal">
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 5}}>
                    <Text style={{fontSize: 20, backgroundColor: '#76b716', borderRadius: '100%', paddingVertical: 3, paddingHorizontal: 5}}>11</Text>
                    <Text style={{fontSize: 25}}>Петров П. А.</Text>
                </View>
                <Text style={{color: 'green'}}>Сдал теорию</Text>
            </View>
            <View style={{flexDirection: 'row', gap: 5}}>
                <Text style={{fontSize: 15, color: 'green'}}>Параллельная парковка</Text>
                <Text> -- </Text>
                <Text style={{fontSize: 15, color: 'purple'}}>Гараж</Text>
            </View>
        </Link>)
}
const styles = StyleSheet.create({});
