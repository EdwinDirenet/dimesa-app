import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#1D2C59'
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={ HomeScreen }/>
    </Stack.Navigator>
  );
};

export default StackNavigation;

