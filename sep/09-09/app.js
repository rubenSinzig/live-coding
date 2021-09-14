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
// POST new author
app.route("/").get(bookController.getAll).post(bookController.addNewAuthor);
// GET one by id
// DELETE one by id
app
  .route("/:id")
  .get(bookController.authorCheck, bookController.getOneByID)
  .delete(bookController.authorCheck, bookController.deleteOneByID)
  .put(bookController.authorCheck, bookController.updateOneByID);
//   .patch(bookController.authorCheck);

app
  .route("/addbooks/:id")
  .post(booksController.authorCheck, booksController.addMoreBooksToAuthor);

module.exports = app;
