import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Card from './app/components/Card';
import { AppNavigator } from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import Home from './app/screens/Home';
import Search from './app/screens/Search';

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <Home /> */}
      {/* <Serch /> */}
      <AppNavigator />
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
