const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
app.use(morgan("dev"));
// hbs
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
// Validation setup
const { body, validationResult } = require("express-validator");

// Let Express understand json
app.use(express.json());
// Let Express understand  Content-Type: application/x-www-form-urlencoded aka form data
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Validation",
    done: false,
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    data: "This is us 🤓 ☺️ 😎 ",
  });
});

app.post(
  "/submit",
  // req.body
  body("email", "Please write valid email ").isEmail(),
  //  if any of this functions says true then it will move to next :)
  // isMobilePhone
  // isEmail()
  // isPostalCode
  // isCurrency
  // isCreditCard
  body(
    "pass",
    "Invalid password, your pass should be 3 chars or more"
  ).isLength({
    min: 3,
  }),

  body("passConf").custom((value, { req }) => {
    if (value != req.body.pass) {
      throw new Error("Password conf is not the same");
    }
    return true;
  }),
  (req, res) => {}
);
module.exports = app;
