const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
app.use(morgan("dev"));

const hbs = require("express-handlebars");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts/",
  })
);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Validation",
    data: "Hey welcome to our app 😎 ",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    data: "This is us 🤓 ☺️ 😎 ",
  });
});

module.exports = app;
