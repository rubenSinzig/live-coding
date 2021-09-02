const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
const userController = require("./controller");

const mongoose = require("mongoose");

// Get you the
const path = require("path");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });
// console.log(path.resolve(__dirname, "views"));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.get("/", userController.getAllUsers);
app.post("/", userController.addNewUser);

module.exports = app;
