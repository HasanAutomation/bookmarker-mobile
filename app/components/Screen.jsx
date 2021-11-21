import React from 'react';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={{ ...styles.screen, ...style }}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
});
