let books = require('../data/booksData.');
const { deleteByIndex } = require('../utils');

exports.getBookById = async function (id) {
  try {
    let book = books.find((book) => book.id == id);
    if (book == undefined) return false;
    return book;
  } catch (error) {
    throw error;
  }
};
exports.getAllBooks = async function () {
  try {
    return books;
  } catch (error) {
    throw error;
  }
};
exports.addBook = async function (
  id,
  title,
  author,
  year_written,
  edition,
  price
) {
  try {
    books.push({ id, title, author, year_written, edition, price });
    return books;
  } catch (error) {
    throw error;
  }
};
exports.editBook = async function (
  id,
  title,
  author,
  year_written,
  edition,
  price
) {
  try {
    let bookToEdit = books.find((book) => book.id == id);
    if (bookToEdit == undefined) return false;
    bookToEdit.title = title || bookToEdit.title;
    bookToEdit.author = author || bookToEdit.author;
    bookToEdit.year_written = year_written || bookToEdit.year_written;
    bookToEdit.edition = edition || bookToEdit.edition;
    bookToEdit.price = price || bookToEdit.price;
    return bookToEdit;
  } catch (error) {
    throw error;
  }
};
exports.deleteBook = async function (id) {
  try {
    let bookToDeleteIndex = books.findIndex((book) => book.id == id);
    if (bookToDeleteIndex == -1) return false;
    return deleteByIndex(bookToDeleteIndex, books);
  } catch (error) {
    throw error;
  }
};
