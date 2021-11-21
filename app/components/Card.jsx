import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Linking from 'expo-linking';

export default function Card({ item }) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        numberOfLines={1}
        onPress={() => Linking.openURL(item.link)}
      >
        {item.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 7,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    elevation: 9,
    shadowOpacity: 0.8,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
  },
});
