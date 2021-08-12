// npm init -y
// echo "PORT=5000" > .env
// echo "node_modules/" > .gitignore
// npm i express dontenv
// npm i nodemon --save-dev
// json script
// "start": "nodemon index.js"
require("dotenv").config();
// express
const express = require("express");
const app = express();
// import .json
const data = require("./data.json");
// to help express read json :)
app.use(express.json());
app.use(logger);

// Middleware
function logger(req, res, next) {
  console.log("Log 1");
  next();
}

// http://localhost:5000/
app.get("/", (req, res) => {
  //console.log(req);
  res.send("<h2>Welcome to our App</h2>");
});
// http://localhost:5000/about
app.get("/about", (req, res) => {
  res.send("<h2>We are the coolest pp</h2>");
});

// http://localhost:5000/user
app.get("/user", userLogged, (req, res) => {
  // url /user?name=Hadi
  // console.log(req.query);
  // const username = req.query.name;
  const username = req.userName;
  res.send(`<h2>Hey ${username} </h2>`);
});

function userLogged(req, res, next) {
  if (req.query.username == "Hadi") {
    console.log("Log 2");
    req.userName = "Hadi";
    next();
  } else {
    res.send("Login or Register");
  }
}

// POST method  http://localhost:5000/login
app.post("/login", (req, res) => {
  console.log(req.body);
  /*
  {
	"userName":"Hadi",
	"pass":"000callme000"
}
  */

  const userName = req.query.userName;
  const pass = req.query.pass;

  const loginName = data.find((ele) => userName == ele.userName);
  const loginPW = data.find((ele) => pass == ele.password);

  if (userName === loginName.userName && pass === loginPW.password) {
    res.status(200).send(`Welcome ${userName}`);
  } else {
    res.status(401).send("invalid username or pass");
  }
});
// GET method  http://localhost:5000/api
app.get("/api", (req, res) => {
  res.status(200).json({ id: 1, cityName: "Berlin", country: "DE" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listen on http://localhost:${PORT}`);
});
