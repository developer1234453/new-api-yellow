// src/utils/storage.js

export const addBookmark = (jobId) => {
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  if (!bookmarks.includes(jobId)) {
    bookmarks.push(jobId);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
};

export const getBookmarks = () => {
  return JSON.parse(localStorage.getItem('bookmarks')) || [];
};
