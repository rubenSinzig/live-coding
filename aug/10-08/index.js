// server
// https://digitalthinkerhelp.com/what-is-client-server-architecture-diagram-types-examples-components/
// http 2
// https://cascadingmedia.com/insites/2015/03/http-2.html
// The Hypertext Transfer Protocol (HTTP)
// HTTP status
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// HTTP Methods
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// http://localhost:5000/
app.get("/", (req, res) => {
  res.send("Hey, I am home page");
});
// http://localhost:5000/about
app.get("/about/", (req, res) => {
  res.send("<h1>About page</h1>");
});
// http://localhost:5000/apps

app.listen(PORT, () => {
  console.log(`Server is running on port :${PORT}`);
});

// To install express
//$ npm init -y
//$ npm i express
//  "start": "nodemon index.js"
//$ nodemon index.js || npm start

// To Generate project skeleton
//$ npm i -g express-generator
//$ express -h
//$ express --ejs <project-name>
//   change directory:
// $ cd first-BE-app

// install dependencies:
//   $ npm install

// run the app:
//   $ DEBUG=first-BE-app:* npm start
