import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import Constants from 'expo-constants';

function OfflineNotice() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Internet Connection</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: '100%',
    position: 'absolute',
    top: Constants.statusBarHeight,
    height: 50,
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },
});

export default OfflineNotice;
