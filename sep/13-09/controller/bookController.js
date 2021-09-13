const { Author, Book } = require("../model/authorModel");
const mongoose = require("mongoose");
const booksControllers = {};

// GET all authors
booksControllers.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};
// GET all books
booksControllers.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};
// POST author

// POST book

module.exports = booksControllers;
