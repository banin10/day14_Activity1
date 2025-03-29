import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const BlackScreen = ({ navigation }) => {
    return (
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.text}>Parang Tanga</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} ></Button>
            
        </View>
    );
};

StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },
});


export default BlackScreen;