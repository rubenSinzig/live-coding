const AuthorModel = require("../model/authorModel");
const booksController = {};

booksController.getAll = async (req, res) => {
  try {
    const authors = await AuthorModel.find();
    res.status(200).json(authors);
  } catch (err) {
    // res.status(500).json({
    res.status(err.status).json({
      message: err.message,
    });
  }
};

// {
//   authorName: String,
//     books[
//       {
//         title: String,
//         issueYear: Number,
//       }, {
//         title: String,
//         issueYear: Number,
//       }, {
//         title: String,
//         issueYear: Number,
//       }
//     ];
// }
booksController.addNewAuthor = async (req, res) => {
  //console.log(req.body);

  const author = new AuthorModel({
    authorName: req.body.name,
  });
  req.body.books.map((book) => {
    author.books.push({ title: book.title, issueYear: book.issueYear });
  });
  try {
    await author.save();
    res.status(201).json({
      message: "This author been added",
      author,
    });
  } catch (err) {
    res.status(err.status).json({
      message: err.message,
    });
  }
};

module.exports = booksController;
