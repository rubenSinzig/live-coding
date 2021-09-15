const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");
const multer = require("multer");

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
  res.render("index", {
    title: "Welcome",
    done: false,
    errors: req.session.errors,
  });
  req.session.errors = null;
});
// register

// login

// logout

module.exports = router;
