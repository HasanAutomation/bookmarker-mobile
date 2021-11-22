import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppLoading from '../components/AppLoading';
import BookmarkList from '../components/BookmarkList';
import bookmarks from '../utils/api/bookmarks';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadBookmarks = async page => {
    setLoading(true);
    const { data } = await bookmarks.getBookmarks(page);
    setData(data.data);
    setLoading(false);
  };

  useEffect(() => {
    loadBookmarks(1);
  }, []);

  if (loading) return <AppLoading loading={loading} />;

  return (
    <View style={styles.container}>
      <BookmarkList bookmarks={data} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
