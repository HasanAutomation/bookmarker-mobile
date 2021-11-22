import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function AppLoading({ loading, style }) {
  return (
    <View style={{ ...styles.container, ...style }}>
      <ActivityIndicator
        animating={loading}
        size='large'
        color={colors.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppLoading;
