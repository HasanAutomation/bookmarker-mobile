import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { AppNavigator } from './app/navigation/AppNavigator';
import { AuthNavigator } from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import bookmarks from './app/utils/api/bookmarks';

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
      {/* <AuthNavigator /> */}
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
