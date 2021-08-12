/* 
To start new express project
npm init -y
 echo "PORT=5000" > .env
 echo "node_modules/" > .gitignore
 npm i express
 npm i dotenv
 npm i lowdb
 npm i nodemon --save-dev
 touch index.js
 json script
 "start": "nodemon index.js"
 */

// express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const jsonFile = new FileSync("db.json");
const db = low(jsonFile);

// json setup old school
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.raw());
// json cool method
app.use(express.json());

// root route
app.get("/", (req, res) => {
  res.send("Welcome to our lowdb app");
});

// db init
app.get("/new", async (req, res) => {
  await db.defaults({ articles: [], user: {}, num: 1 }).write();
  res.send("New db being init");
});

// add
app.get("/add", async (req, res) => {
  //url /add?id=1&title=cool
  const id = req.query.id;
  const title = req.query.title;
  db.get("articles").push({ id: id, title: title }).write();
  res.send(`New data being entered id:${id} title${title}:`);
});

// find

app.get("/find", async (req, res) => {
  //url  /find?id=1
  const idToFind = req.query.id;
  res.send(await db.get("articles").find({ id: idToFind }).value());
});
// update

// delete

app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});
