// Traversing
//  Node vs Element Nodes

const ele = document.querySelector("#second").previousElementSibling;
console.log(ele);
const ele2 = document.querySelector("body").previousSibling;
console.log(ele2);
// firstChild
const mainText = document.querySelector("#text").firstElementChild;
console.log(mainText.textContent);
// nodeName, nodeType, id, innerText
let text = document.querySelector("span");
let closetEle = text.closest(".cool");
console.log(closetEle);

let names = document.querySelectorAll("li");
names.forEach((name) => {
  console.log(name);
  if (name.matches(".teacher"))
    console.log(`${name.textContent} is a teacher for FBW 48-1`);
});

let printComments = document.documentElement.childNodes;
// console.log(printComments);
printComments.forEach((com) => {
  //   console.log(com);
  if (com.nodeType == 8) console.log(com.nodeValue);
});

// textContent gets the content of all elements, including <script> and <style> elements. In contrast.
// innerText only shows “human-readable” elements.
// more on that
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText

// nodeType list, 1: div, p. 8: comment
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

// more on parentNode
//https://developer.mozilla.org/en-US/docs/Web/API/ParentNode

// closest

// matches

// querySelector
