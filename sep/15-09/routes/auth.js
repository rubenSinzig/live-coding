const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");
const multer = require("multer");
//const { body, validationResult } = require("express-validator");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
console.log(new Date().toISOString());
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 },
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/gif" ||
      file.mimetype == "image/png"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpeg .gif .png files are OK!"), false);
    }
  },
});

router.get("/", (req, res) => {
  let done, title;
  if (req.cookies.session_id) {
    title = "You are already logged in";
    done = true;
  } else {
    title = "Welcome";
    done = false;
  }
  res.render("index", {
    title,
    done,
    errors: req.session.errors,
  });
  req.session.errors = null;
});
// register
router.post("/register", upload.single("avatar"), userControllers.addUser);
// login
router.get("/login", (req, res) => {
  // This if statement can be done in middleware to check if the user logged in or not
  let title, done;
  if (req.cookies.session_id) {
    title = "You ar e already logged in";
    done = true;
  } else {
    title = "Login";
    done = false;
  }
  res.render("login", {
    title,
    done,
    errors: req.session.errors,
  });
  req.session.errors = null;
});
router.post("/login", userControllers.login);
// logout
router.get("/logout", (req, res) => {
  if (req.cookies && req.cookies.session_id) {
    res.clearCookie("session_id");
    res.clearCookie("role");
    res.clearCookie("user_id");
  }
  res.redirect("/");
});

module.exports = router;
