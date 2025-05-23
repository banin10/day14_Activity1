import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={StyleSheet.container}>
            <center>{StyleSheet.text}Parang Tanga</center>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} ></Button>
            </View>
    );
};

StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});


export default DetailsScreen;