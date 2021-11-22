import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Searchbar({ onChange, value }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search any keyword'
        style={styles.textInput}
        value={value}
        onChangeText={text => {
          onChange(text);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'gray',
    padding: 10,
    fontSize: 18,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});
