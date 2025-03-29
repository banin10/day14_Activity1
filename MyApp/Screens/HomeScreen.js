import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={StyleSheet.container}>
           <center><bold> Welcome Back Tatay Digong </bold></center>
            <Button
            title="Go to Details"
            onPress={() => {
                navigation.navigate("Details");
                
            }}
            />
            <Button
            title="Green"
            onPress={() => {
                navigation.navigate("Green"); 
            }}
            color="green"
             marginBottom={10}  
            />
            <Button
            title="Pink"
            onPress={() => {
                navigation.navigate("Pink");
                
            }}
            color="pink"
             marginBottom={10}
            />
            <Button
            title="Black"
            onPress={() => {
                navigation.navigate("Black");
                
            }}
            color="black"
             marginBottom={10}
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