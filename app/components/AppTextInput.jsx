import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function AppTextInput({ icon, style, ...rest }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={28} color={colors.medium} />
      <TextInput style={{ ...styles.textInput, ...style }} {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.light,
    borderRadius: 20,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    marginLeft: 5,
  },
});

export default AppTextInput;
