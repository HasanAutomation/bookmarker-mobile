import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import useAuth from '../hooks/useAuth';

function Account({ navigation }) {
  const { context, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email : {context.user.email}</Text>
      <Text style={styles.text} onPress={() => navigation.navigate('Home')}>
        Bookmarks : {context.user.bookmarks.length}
      </Text>
      <AppButton title='Log Out' onPress={() => logout()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  text: {
    backgroundColor: colors.white,
    padding: 10,
    fontSize: 20,
    // borderBottomWidth: 1,
    // borderColor: colors.light,
    marginBottom: 2,
  },
});

export default Account;
