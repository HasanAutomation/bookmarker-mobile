import client from './client';

const getBookmarks = (page, name = null) =>
  client.get(`/bookmarks/?page=${page}${name ? `&name=${name}` : ''}`);

const addBookmark = bookmarkData => client.post('/bookmarks', bookmarkData);

export default {
  getBookmarks,
  addBookmark,
};
