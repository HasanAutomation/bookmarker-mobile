import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import AppLoading from '../components/AppLoading';
import BookmarkList from '../components/BookmarkList';
import cache from '../utility/cache';
import bookmarks from '../utils/api/bookmarks';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { params } = useRoute();

  const loadBookmarks = async page => {
    setLoading(true);
    // console.log('DATA in store==', await cache.get('/bookmarks/?page=1'));
    const { data } = await bookmarks.getBookmarks(page);
    setData(data.data);
    setLoading(false);
  };

  useEffect(() => {
    loadBookmarks(1);
  }, [params]);

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

export default memo(Home);
