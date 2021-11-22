import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from '../components/AppLoading';
import BookmarkList from '../components/BookmarkList';
import Searchbar from '../components/Searchbar';
import bookmarks from '../utils/api/bookmarks';

export default function Search() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const loadBookmarks = async (page, name) => {
    setLoading(true);
    const { data } = await bookmarks.getBookmarks(page, name);
    setData(data.data);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      if (text) loadBookmarks(1, text);
    }, 500);
  }, [text]);

  return (
    <View style={styles.container}>
      <Searchbar onChange={text => setText(text)} value={text} />
      {loading ? (
        <AppLoading style={styles.loader} loading={loading} />
      ) : data.length === 0 ? (
        <Text style={styles.error}>No match found</Text>
      ) : (
        <BookmarkList bookmarks={data} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  loader: {
    marginTop: 20,
  },
  error: {
    fontSize: 19,
  },
});
