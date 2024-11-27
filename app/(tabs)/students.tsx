import {Image, StyleSheet, Platform, View, Text, FlatList, TouchableOpacity} from 'react-native';
import StudentsList from "@/components/Students/StudentsList/StudentsList";


export default function StudentsScreen() {

    return (
        <View style={styles.container}>
            <StudentsList/>
        </View>
    );
}

const styles = StyleSheet.create({


    container: {backgroundColor: '#fff', paddingTop: 20, paddingHorizontal: 10},
});
