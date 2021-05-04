const result = document.querySelector(".result");
const form = document.querySelector("from");
const header = document.querySelector("h1");
const msg = document.querySelector(".msg");
const done = document.querySelector(".done");
// showMsg
function newUser() {
  result.innerHTML += "Hey, welcome again 😎 <br>";
}
function winDowLoad() {
  //alert("Hi");
  //setInterval(newUser, 1000);
}
function redBg() {
  this.style.backgroundColor = "red";
}

function whiteBg() {
  this.style.backgroundColor = "white";
}
const start = () => {
  header.addEventListener("mouseenter", redBg);
  header.addEventListener("mouseleave", whiteBg);
};
const stop = () => {
  header.removeEventListener("mouseenter", redBg);
  header.removeEventListener("mouseleave", whiteBg);
};
function hide() {}
window.addEventListener("load", winDowLoad);
