// Traversing
//  Node vs Element Nodes

const ele = document.querySelector("#second").previousElementSibling;
console.log(ele);
const ele2 = document.querySelector("body").previousSibling;
console.log(ele2);
// firstChild
const mainText = document.querySelector("#text").firstElementChild;
console.log(mainText.textContent);

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
// nodeName, nodeType, id, innerText
// closest
let text = document.querySelector("span");
let closetEle = text.closest(".cool");
console.log(closetEle);
// matches
let names = document.querySelectorAll("li");
names.forEach((name) => {
  console.log(name.nodeType);
  if (name.matches(".teacher"))
    console.log(`${name.textContent} is a teacher for FBW 48-1`);
});
// querySelector
const allChildren = document.querySelector("body").children;
console.log(allChildren);
let menuList = document.getElementById("menu");
console.log(menuList.firstElementChild);
console.log(menuList.lastElementChild);

// all comments in your html page should be printed in console
// but first let's understand apply method
const lettersArr = ["a", "b"];
const numbers = [0, 1, 2];
lettersArr.push.apply(lettersArr, numbers);
console.info(lettersArr); // ["a", "b", 0, 1, 2]
/*  to put it in words 
apply it’s a method will take a value and array(or array-like object )
will execute the function that it’s being applied to (push in our example but it can be any other function/method )
so in our case we passed the whole array to compare it with the result of the function call so I don’t have repeat or I don’t push until my function came back with a result */
// get me now all the comments please 😅
let allComments = (element) => {
  let arr = [];
  element.childNodes.forEach((node) => {
    node.nodeType == 8
      ? arr.push(node)
      : arr.push.apply(arr, allComments(node));
  });
  return arr;
};
console.log(allComments(document));
// childElementCount will tell you how many child elements this element has
// firstChild , lastChild
// firstElementChild , lastElementChild
// nextSibling , previousSibling
// nextElementSibling , previousElementSibling
// innerHTML ,  innerText , textContent

// nice work from two people in our class 🦾
// const allChildren2 = Array.from(document.querySelector("body").childNodes);
// console.log(allChildren2);
// allChildren2.forEach((child) => {
//   if (child.nodeType == 8) console.log(child);
// });

const copy = () => {
  let text = document.querySelector(".userInput");
  text.select();
  document.execCommand("copy");
};
document.querySelector(".copyButton").addEventListener("click", copy);
// other way
// const allEll = document.querySelectorAll("*");
// console.log(allEll);
// allEll.forEach((elem) =>
//   elem.childNodes.forEach((node) => {
//     if (node.nodeName === "#comment") console.log(node);
//   })
// );
