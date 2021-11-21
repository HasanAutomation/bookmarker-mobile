import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BookmarkList from '../components/BookmarkList';
import Screen from '../components/Screen';
import Searchbar from '../components/Searchbar';

export default function Search() {
  const [data, setData] = useState([]);
  return (
    <View style={styles.container}>
      <Searchbar />
      <BookmarkList bookmarks={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
