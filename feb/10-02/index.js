const car = {
  brandName: "Audi",
  modelYear: "2021",
  priseWithVAT: 20,
  colors: ["red", "black", "white"],
};

// Shallow clone for an object using ...
const newClonedObj = { ...car };
console.log(newClonedObj);
newClonedObj.brandName = "BMW";
newClonedObj.colors[0] = "orange";
console.log(car);
//  Recursion
// factorial example
const factorial = (num) => {
  //console.log(num);
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
console.log(factorial(7));
// 7*6 = *5  = *4 = *3 = *2 = *1

// Deep copy using recursion 🤨
// use for free :) new version with arrays and shorter methods 😎
function deepCopy(obj) {
  // check if it's array
  if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  }
  // check it it's object
  if (typeof obj == "object") {
    return Object.keys(obj)
      .map((key) => ({ [key]: deepCopy(obj[key]) })) // [{},{},{},{}]
      .reduce((acc, cur) => Object.assign(acc, cur), {});
  }
  // return the obj and if was no object or no array return the argument itself
  return obj;
}

const brandNewCloned = deepCopy([{ name: "Hadi" }, { name: "Zain" }]);
console.log(brandNewCloned);
const deepCopyObj = deepCopy(car);
console.log(deepCopyObj);
//brandNewCloned.colors[2] = "Pink";
console.log(car);
const newObj = Object.assign({}, car);
newObj.brandName = "Bugatti";
console.log(car);

// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example:
const scores = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

const scrabble = (arr) => {
  return arr.reduce((acc, cur) => acc + cur.score, 0);
};

console.log(scrabble(scores));

// Please print each of your answers to the console.

// 1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object.

// 2. Get Values. Create a function that returns an array of all values of an object's properties.

// Examples:
// Expected output:
// ["tea", "coffee", "milk"]
function getObjectValues(obj) {
  return Object.values(obj);
}
const obj1 = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};
console.log(getObjectValues(obj1));

// 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.

// Example
let person = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
  print: function () {
    return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}`;
  },
};
// Example of Expected Output "Michael Smith is a 20 year old driver in Paris".
// person.print = function () {
//   return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}`;
// };
console.log(person.print());
// Bonus Questions
// 1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
const keysAndVal = (obj) => {
  return Object.entries(obj);
};

console.log(keysAndVal(person));

// Examples:
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// })
// Expected output:
// [["A", 1], ["B", 2], ["C", 3]]
// objectToArray({
//   cats: 1,
//   dogs: 2,
//   turtles: 4
// })
// Expected output:
// [["cats", 1], ["dogs", 2], ["turtles", 4]]

const objectToArray = (obj) => {
  return Object.entries(obj);
};
console.log(
  objectToArray({
    cats: 1,
    dogs: 2,
    turtles: 4,
  })
);
// 2. List Properties. Create a function that returns an array of properties of a javascript object.

// Example
let student = {
  name: "Mike",
  class: "4A",
  course: "English",
};
// Expected output:
// ["name", "class", "course"]

const propNames = (obj) => {
  return Object.keys(obj);
};
console.log(propNames(student));
// 3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.

// Example
let first = { firstName: "John", lastName: "Vooo" };
let last = { lastName: "Smith" };
// Expected output:
// {firstName: "John", lastName: "Smith"}
const makeItIntoOne = (obj1, obj2) => {
  return Object.assign(obj1, obj2);
};
console.log(makeItIntoOne(first, last));
// Extra Credit: What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.

// Example:
// let person = {
//   name: "John",
//   job: "teacher"
// }
// Expected Output:
// {"John": name, "teacher": job}

const reverseObject = (obj) => {
  let newObj = {};
  for (let prop in obj) {
    newObj[obj[prop]] = prop;
  }
  return newObj;
};
console.log(reverseObject(person));

// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

// Examples:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]

// Expected Output:
// {"John": name, "teacher": job}
const twoArrFromAnObj = (obj) => {
  const keysArr = Object.keys(obj);
  const ValArr = Object.values(obj);
  return [keysArr, ValArr];
};

console.log(twoArrFromAnObj({ a: 1, b: 2, c: 3 }));
