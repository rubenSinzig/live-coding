// callbacks
function first(cb) {
  const funFunction = () => "Noooo";
  return cb;
}
function cb() {
  return "fun";
}

console.log(first(cb()));

// map
const names = ["Zain", "Olga", "Nancy", "Nancy2"];
//const heyNames = names.map((item, index) => `Hi ${item}, you live in ${index}`);
const heyNames = names.map((name) => `Hi ${name}`);

console.log(heyNames);
//console.log(names);
// reduce
const numArr = [2, 3, 4, 5, 6, 78, 8];
const reducer = (acc, cur) => acc + cur;
const totalArr = numArr.reduce(reducer, 0);
console.log(totalArr);
// filter
const filterArr = names.filter((item) => item.length == 7);
console.log(filterArr);

// find
const findVal = names.find((item) => item.length == 400);
console.log(findVal);

// fill
const numbers = [2, 4, 5, 67, 8, 8, 9, 5, 4];
//numbers.fill(3);
console.log(numbers);

// some
const isEven = (item) => item % 2 == 0;
console.log(numbers.some(isEven));

// every
const isBigger = (item) => item > 55;
console.log(numbers.every(isBigger));

// sort
const alpha = ["a", "c", "b", 2, "!", "ü"]; // UTF-16
console.log(alpha.sort());
const words = ["hi", "a", "web", "development"];
const sortedArr = words.sort((a, b) => b.length - a.length);
console.log(sortedArr);

console.log([11, 2, 1, 22].sort((a, b) => a - b));

// for in
const person = {
  userName: "Zain",
  age: 22,
  add: "Hamburg",
};

for (prop in person) {
  console.log(`${prop} : ${person[prop]}`);
}
// for of

const people = [
  {
    userName: "Zain",
    age: 22,
    add: "Düs",
  },
  {
    userName: "Olga",
    age: 21,
    add: "Berlin",
  },
  {
    userName: "Nancy",
    age: 40,
    add: "L",
  },
];

// loops,  ,SIAF,IIFE , closure, Array advanced methods(map,filter,reduce)

// ==       ===     !=       <=
//  &&   ||

let con1 = 1 < 23; // true
let con2 = 1 == 23; // false
let con3 = 1 <= 23; // true
console.log(con3);
// true && true = true
// true && false = false
// true || true = true
// false || true = true
// false || false = false
if (con1 && con2) {
  console.log("Nice you are the best person in the world");
}
const arr1 = [333, 333456, 777];
let box; // box is ready
for (let i = 0; i <= 5; i++) {
  // i = 2
  box = ""; // box is empty now
  for (let j = 0; j < i; j++) {
    // j = 3
    box += "+"; // box=  +
  }
  console.log(box); // ++
}

let text = "Hi";
console.log(text);
text += "something";
console.log(text);
text = "";
console.log(text);
text = "c";
text += "o";
text += "o";
text += "l";
text += " ";
console.log();
text = "c";
text += "o";
text += "o";
text += "l";
console.log(text);
const arrOfPe = [
  [2, 33],
  [44, 3],
  [66, 4],
];
for (let i = 0; i < arrOfPe.length; i++) {
  for (let j = 0; j < arrOfPe[i].length; j++) {
    console.log(arrOfPe[i][j]);
  }
}
