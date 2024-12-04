import { StyleSheet, Text, View } from 'react-native';
import Profile from "@/components/Students/StudentProfile/Profile";

export default function ModalProfile() {
    return (
        <View style={styles.container}>
            <Profile/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});