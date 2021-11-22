import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

function ErrorMessage({ visible, error }) {
  if (!visible || !error) return null;
  return <Text style={styles.errorText}>{error}</Text>;
}

const styles = StyleSheet.create({
  errorText: {
    color: colors.primary,
    fontSize: 19,
  },
});

export default ErrorMessage;
