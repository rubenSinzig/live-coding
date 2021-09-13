const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
// Allow Express to understand json
app.use(express.json());

// Mongoose
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected 😎"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });
const booksControllers = require("./controller/bookController");
// GET all authors
app.route("/").get();
// GET all books from an author
// Add new author
// Add new book for an author
// DEL later
// PUT
// PATCH

module.exports = app;
