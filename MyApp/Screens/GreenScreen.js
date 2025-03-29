import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const GreenScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ay Ambot!</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} ></Button>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
});


export default GreenScreen;