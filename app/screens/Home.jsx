import React from 'react';
import { StyleSheet, View } from 'react-native';
import BookmarkList from '../components/BookmarkList';
import bookmarks from '../utils/bookmarks.json';

export default function Home() {
  return (
    <View style={styles.container}>
      <BookmarkList bookmarks={bookmarks} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
