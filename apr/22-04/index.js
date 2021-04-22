// where I can link my js file

// window.alert === alert()

// -Node-
// In the context of the DOM, a node is a single point in the node tree. Various things that are nodes are the document itself, elements, text, and comments.

// document.querySelectorAll() will return A non-live NodeList 🧐
// -NodeList-
// NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().

// Node tree https://dom.spec.whatwg.org/#concept-node

const container = document.querySelector(".container");

const spanList = document.querySelectorAll(".container span");
console.log(spanList);
spanList.forEach((span) => {
  span.innerHTML = "Nice 🤓 <br>";
  span.style.backgroundColor = "orange";
});

console.log(spanList.length);
spanList[2].style.backgroundColor = "red";

const menu = document.querySelector("#menuList");

// const highlight = document.querySelector(".highlight");
// highlight.style.backgroundColor = "yellow";

// + >
const highlight = document.querySelectorAll("li[class='highlight']");
console.log(highlight);
highlight[0].style.backgroundColor = "blue";

const moreClass = document.querySelector(".main");
moreClass.classList.add("text");
moreClass.classList.add("small");
moreClass.classList.add("cool", "flex-size");
console.log(moreClass.classList);
moreClass.classList.remove("flex-size");
console.log(moreClass.classList);
let classArr = ["classOne", "classTwo"];

moreClass.classList.add(...classArr);
console.log(moreClass.classList);
//

moreClass.style.color = "red";
moreClass.style.cssText = "font-size: 2.0rem; color: blue;";
