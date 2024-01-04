const express = require("express");
const router = express.Router();
const bookController = require("../controllers/BooksController/BookController");

router.get("/book", async (req, res, next) => {
  try {
    const books = await bookController.getBooks();
    res.json(books);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
