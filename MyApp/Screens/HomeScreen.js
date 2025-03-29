import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={StyleSheet.container}>
            <Text> Welcome Back Tatay Digong</Text>
            <Button
            title="Go to Details"
            onPress={() => {
                navigation.navigate("Details");
            }}
            />
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
export default HomeScreen;