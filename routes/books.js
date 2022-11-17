const {
  getBookById,
  getAllBooks,
  addBook,
  editBook,
  deleteBook,
} = require('../controllers/books.controller');

const router = require('express').Router();

router.get('/:id', getBookById);
router.get('/all', getAllBooks);
router.post('/add', addBook);
router.put('/edit', editBook);
router.delete('/:id', deleteBook);

module.exports = router;
