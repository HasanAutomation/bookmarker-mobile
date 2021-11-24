import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { AuthContext } from './app/context/AuthContext';
import { AppNavigator } from './app/navigation/AppNavigator';
import { AuthNavigator } from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import storage from './app/utils/storage';
import authApi from './app/utils/api/auth';

export default function App() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const fetchUser = async () => {
    const accessToken = storage.getToken();
    if (!accessToken) return setUser(null);
    const res = await authApi.getCurrentUser();
    if (!res.ok) return setUser(null);
    setUser(res.data.data);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={fetchUser}
        onFinish={() => setIsReady(true)}
        onError={err => {
          setIsReady(true);
        }}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
        <StatusBar style='auto' />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
