import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createStackNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Regsiter' component={Register} />
  </Stack.Navigator>
);
