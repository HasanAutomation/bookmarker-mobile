import { useNetInfo } from '@react-native-community/netinfo';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import AppLoading from '../components/AppLoading';
import BookmarkList from '../components/BookmarkList';
import OfflineNotice from '../components/OfflineNotice';
import bookmarks from '../utils/api/bookmarks';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const netInfo = useNetInfo();

  const { params } = useRoute();

  const loadBookmarks = async page => {
    setLoading(true);
    const { data } = await bookmarks.getBookmarks(page);
    setData(data.data);
    setLoading(false);
  };

  useEffect(() => {
    loadBookmarks(1);
  }, [params]);

  if (loading) return <AppLoading loading={loading} />;

  return (
    <>
      {netInfo.isInternetReachable === false && netInfo.type !== 'unknown' && (
        <OfflineNotice />
      )}
      <View style={styles.container}>
        <BookmarkList bookmarks={data} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginTop: 30,
  },
});

export default memo(Home);
