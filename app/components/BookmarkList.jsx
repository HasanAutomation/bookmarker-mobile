import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import Card from './Card';

import MOCKDATA from '../utils/bookmarks.json';

export default function BookmarkList({ bookmarks = MOCKDATA }) {
  function showData({ item }) {
    return (
      <>
        <Card item={item} />
      </>
    );
  }

  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={bookmarks}
        keyExtractor={bookmark => bookmark._id.$oid.toString()}
        renderItem={showData}
      />
    </>
  );
}
