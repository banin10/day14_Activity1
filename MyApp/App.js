import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import GreenScreen from './Screens/DetailsScreen';
import PinkScreen from './Screens/DetailsScreen';
import BlackScreen from './Screens/DetailsScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Green" component={GreenScreen} />
      <Stack.Screen name="Pink" component={PinkScreen} />
      <Stack.Screen name="Black" component={BlackScreen} />

      </Stack.Navigator>
      </NavigationContainer>
  );
}