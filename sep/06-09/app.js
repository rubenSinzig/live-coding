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
// Setups
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const { body, validationResult } = require("express-validator");

// Get it started
app.use(express.json());
app.use(cookieParser());
// https://www.npmjs.com/package/express-session
app.use(
  expressSession({
    secret: "somethingSecret",
    saveUninitialized: false,
    resave: false,
  })
);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Validation",
    done: false,
    errors: req.session.errors,
    cool: true,
  });
  req.session.errors = null;
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
  //  if any of this functions said true then it will ove to next :)
  // isMobilePhone
  // isEmail()
  // isPostalCode
  // isCurrency
  // isCreditCard
  body("pass", "Invalid password").isLength({ min: 5 }),
  body("passConf").custom((value, { req }) => {
    if (value != req.body.pass) {
      throw new Error("Password conf is not the same");
    }
    return true;
  }),
  (req, res) => {
    // req has form data
    // req.body.email
    // req.body.pass
    // req.body.passConf
    // https://express-validator.github.io/docs/index.html
    // https://www.npmjs.com/package/express-handlebars

    res.end();
  }
);
module.exports = app;
