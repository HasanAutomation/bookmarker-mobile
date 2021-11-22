import { useFormikContext } from 'formik';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../config/colors';

function AppSubmitButton() {
  const { handleSubmit } = useFormikContext();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={handleSubmit}
    >
      <View>
        <Text style={styles.text}>Submit</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default AppSubmitButton;
