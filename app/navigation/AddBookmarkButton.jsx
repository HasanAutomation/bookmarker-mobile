import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function AddBookmarkButton({ onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={styles.buttonContain}>
        <MaterialCommunityIcons name='plus' size={28} color='white' />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContain: {
    width: 80,
    height: 80,
    borderRadius: 40,
    bottom: 30,
    backgroundColor: colors.primary,
    borderWidth: 5,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddBookmarkButton;
