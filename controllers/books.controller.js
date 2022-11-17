const {
  getBookById,
  getAllBooks,
  addBook,
  editBook,
  deleteBook,
} = require('../models/Book');
const { request, response } = require('express');

/**
 * @param {request} req
 * @param {response} res
 */
exports.getBookById = async function (req, res, next) {
  try {
    let { id } = req.body;
    let book = await getBookById(id);
    if (!book) return res.status(404).send('book not found');
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};
/**
 * @param {request} req
 * @param {response} res
 */
exports.getAllBooks = async function (req, res, next) {
  try {
    let books = await getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};
/**
 * @param {request} req
 * @param {response} res
 */
exports.addBook = async function (req, res, next) {
  try {
    let { id, title, author, year_written, edition, price } = req.body;
    let newBooks = await addBook(
      id,
      title,
      author,
      year_written,
      edition,
      price
    );
    res.status(201).json(newBooks);
  } catch (error) {
    next(error);
  }
};
/**
 * @param {request} req
 * @param {response} res
 */
exports.editBook = async function (req, res, next) {
  try {
    let { id, title, author, year_written, edition, price } = req.body;
    let updateBook = await editBook(
      id,
      title,
      author,
      year_written,
      edition,
      price
    );
    if (!updateBook) return res.status(404).send('this book not found');
    res.status(204).json(updateBook);
  } catch (error) {
    next(error);
  }
};
/**
 * @param {request} req
 * @param {response} res
 */
exports.deleteBook = async function (req, res, next) {
  try {
    let { id } = req.body;
    let deletedBook = await deleteBook(id);
    if (!deletedBook) return res.status(404).send('this book not found');
    res.status(204).send('book deleted successfully')
  } catch (error) {
    next(error);
  }
};
