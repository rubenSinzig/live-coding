const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));

app.get("/users", async (req, res) => {
  try {
    const users = ["Nancy", "Zain", "Jack", "Olga"];
    res.json(users);
  } catch (err) {
    res.status(err.status).json({
      message: err.message,
    });
  }
});

module.exports = app;
