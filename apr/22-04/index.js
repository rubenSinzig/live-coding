// where I can link my js file

// window.alert === alert()

// -Node-
// In the context of the DOM, a node is a single point in the node tree. Various things that are nodes are the document itself, elements, text, and comments.

// document.querySelectorAll() will return A non-live NodeList 🧐
// -NodeList-
// NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().

// Node tree https://dom.spec.whatwg.org/#concept-node

const container = document.querySelector(".container");
console.log(container);

const spanList = document.querySelectorAll(".container span");
console.log(spanList);
spanList.forEach((span) => {
  span.innerHTML = "Nice 🤓 <br>";
  span.style.backgroundColor = "orange";
});
