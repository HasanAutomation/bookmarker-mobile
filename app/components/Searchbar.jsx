import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Searchbar() {
  const [term, setTerm] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={term}
        onChangeText={text => setTerm(text)}
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
