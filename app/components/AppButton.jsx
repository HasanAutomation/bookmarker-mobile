import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: colors.white,
  },
});

export default AppButton;
