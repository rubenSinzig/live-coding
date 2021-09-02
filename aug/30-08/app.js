const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
// User controller
const userController = require("./controller");

// Get you the path
const path = require("path");

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });

// App setting Engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
//console.log(path.resolve(__dirname, "views"));

app
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.addTenNewUsers);

module.exports = app;
