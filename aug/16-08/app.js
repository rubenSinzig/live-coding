const express = require("express");
const app = express();
const morgan = require("morgan");
const createError = require("http-errors");
const userRouter = require("./router/users");
const bookRouter = require("./router/books");
app.use(morgan("dev"));

// Middleware
//  app.use((req, res, next) => {
//   if (!req.query.userName) return next(createError(401, "Login to see this page."));
//   next();
// });

app.use("/admin", (req, res, next) => {
  if (!req.query.userName)
    return next(createError(401, "Please login to see this page."));
  next();
});
// localhost:5000/users (GET PUT POST,...)
app.use("/users", userRouter);
app.use("/books", bookRouter);

// any error might happen
// app.use((req, res, next) => {
//   const error = new Error("Noooooo this is not cool");
//   error.status = 404;
//   next(error);
// });
// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message,
//     },
//   });
// });

// root
//Url localhost:5000/
app
  .get("/", (error, req, res) => {
    console.log("GET");
    res.status(200).json({ text: "This is a GET req" });
  })
  .post("/", (req, res) => {
    console.log("POST");
    res.status(200).json({ text: "This is a POST req" });
  })
  .put("/", (req, res) => {
    console.log("PUT");
    res.status(200).json({ text: "This is a PUT req" });
  })
  .delete("/", (req, res) => {
    console.log("DELETE");
    res.status(200).json({ text: "This is a DELETE req" });
  });

// bill error
app.post("/bill", (req, res, next) => {
  // if
  next(
    createError(402, `You don't have 💶`, {
      detail: {
        yourBalance: 400,
        itemCost: 6000,
      },
    })
  );
});

module.exports = app;
