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
const bookController = require("./controller/bookController");

// GET all
app.route("/").get(bookController.getAll).post(bookController.addNewAuthor);
// POST new author
// GET one by id
// DELETE one by id
// PUT later
// PATCH later
module.exports = app;
