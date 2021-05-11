// Fetch

function fetchTextFile() {
  fetch("./plain.txt")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      document.querySelector(".result").innerHTML = data;
    })
    .catch((err) => console.log(err));
}
function fetchJsonFile() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let userCard = "<h2>All Users </h2>";
      data.forEach((user) => {
        let { id, name, city, age, photo } = user;
        userCard += `
        <div class='card' id=${id}>
        <div class='avatar'>${photo}</div>
      ${name}, <span>${age}</span> old, and I live in <span>${city}</span>
        </div>
        `;
      });
      document.querySelector(".result").innerHTML = userCard;
    })
    .catch((err) => console.log(`So this is what happened ${err}`));
}
// API
//  Application Programming Interface

// https://jsonplaceholder.typicode.com/

// we will use
// https://jsonplaceholder.typicode.com/photos

function fetchImagesApi() {
  // this is a GET req
  fetch("https://jsonplaceholder.typiode.com/photos")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let userCard = "<h2>Images API response </h2>";
      data.forEach((img) => {
        let { albumId, id, title, url, thumbnailUrl } = img;
        userCard += `
        <div id=${id}>
        <img src=${thumbnailUrl} >
        <h3>${title}</h3>
        <img src=${url} alt=${title}>
        </div>
        `;
      });
      document.querySelector(".result").innerHTML = userCard;
    })
    .catch((err) => console.log(`So this is what happened ${err}`));
}
// 200 happy days for me
// 404 File not found
function fetchToDosApi() {
  // this is a GET req
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let userCard = "<h2>ToDos API response </h2>";
      data.forEach((toDo) => {
        let { userId, id, title, completed } = toDo;
        userCard += `
        <li id=${id} >
        <span>${title}</span>
      <input type='checkbox' ${completed ? "checked" : ""}>
        </li>
        `;
      });
      document.querySelector(".result").innerHTML = userCard;
    })
    .catch((err) => console.log(`So this is what happened ${err}`));
}
