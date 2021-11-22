import client from './client';

const getBookmarks = (page, name = null) =>
  client.get(`/bookmarks/?page=${page}${name && `&name=${name}`}`);

export default {
  getBookmarks,
};
