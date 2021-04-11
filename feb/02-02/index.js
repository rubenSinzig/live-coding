// old life with no Objects

let firstName = "zain";
let lastName = "xx";
let userAge = 33;

// Objects
// const <namespace> = { <key 1>: <value 1>, <key 2>: <value 2>, ... }
// keys, properties : value
// Object Literal
const obj = {
  name1: "Hadi",
  name2: "Olga",
  name3: "Zain",
};
const userObj = {
  name: "Nancy",
  lastName: "Sad",
  age: 33,
  add: "xxx str",
  act: ["draw", "sleep", "eat"],
  fat: true,
};
console.log(userObj.name);
console.log(typeof console);
console.log(userObj.act[1]);

// Accessing properties
// 1- with (bracket notation)
console.log(userObj["act"][2]);
// 2- with (dot notation)
console.log(userObj.act[1]);
const obj2 = {};
console.log(typeof obj2);

// Assignment using dot notation, more used to access a property value
obj2.name = "Hadi";
// Assigning using bracket notation, more used for an empty object
obj2["age"] = 31;

obj2.age = 33;

console.log(obj2);

const save = new Object();
console.log(save);
const arr = new Array();
console.log(arr);
// cool for 😎
for (let prop in userObj) {
  console.log(`${prop} : ${userObj[prop]}`);
}

// Tell me more about you
const person = {
  name: "Hadi",
  age: 31,
  birthYear: 1989,
  gender: "Male",
  hight: 176,
  print: function () {
    console.log(
      `I am ${this.name}, my age is ${this.age} I was born in ${this.birthYear}`
    );
  },
  old: function () {
    let currentYear = new Date().getFullYear(); // 2021
    return currentYear - this.birthYear;
  },
};

person.print();

console.log(person.old());
// Object.keys
let keysArr = Object.keys(person);
console.log(keysArr);

// Object.values
console.log(Object.values(person));

// Object.assign
const obj3 = { kids: 2, cars: 400 };
const obj4 = { colors: ["Red", "Grey", "Black"], pet: "fish" };
const totalObjects = Object.assign({ name: "Hadi" }, obj3, obj4);
console.log(totalObjects);
// Object.defineProperty()
console.log(obj4["colors"][1]);
console.log(obj4.colors[1]);
const newPersonObject = {};
Object.defineProperty(newPersonObject, "bike", {
  value: 22,
  writable: false,
});
console.log(newPersonObject.bike);
newPersonObject.bike = 33;
console.log(newPersonObject.bike);
// Object.defineProperties()
Object.defineProperties(newPersonObject, {
  p1: {
    value: "cool",
    writable: true,
  },
  p2: {
    value: "nice",
    writable: false,
  },
  p3: {
    value: 102,
    writable: false,
  },
});
console.log(newPersonObject.p1);
// Object yourPersonObj. Create an object named person2. Loop through the object and print both the property and value of the object.
const person2 = {
  name: "Hadi",
  age: 31,
  city: "Berlin",
};
for (let prop in person2) {
  console.log(`${prop} : ${person2[prop]}`);
}

// Create a function that returns an array of the properties of a javascript object.
//   Example
// let student = {
//   name: "Mike",
//   class: "4A"
//   course: "English"
// }
// Expected output:
//   ["name", "class", "course"]

const objPro = (obj) => {
  return Object.keys(obj);
};

console.log(objPro(person2));

console.log(objPro(person));
// Given the following object
const student = {
  firstName: "Zain",
  lastName: "Oil",
  class: 48,
  print: function () {
    console.log(
      `${this.firstName} ${this.lastName} a student in class ${this.class}`
    );
  },
};
student.print();
// Create a method that prints the following: "Zain Oil a student in class 48"

// Get Values. Create a function that returns an array of all values of an object’s properties.
//   Examples:
const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};
// Expected output:
//   ["tea", "coffee", "milk"]

const objVal = (obj) => {
  return Object.values(obj);
};
console.log(objVal(getObjectValues));

const objectToArray = {
  cats: 1,
  dogs: 2,
  turtles: 4,
};
//   Expected output:
//   [["cats", 1], ["dogs", 2], ["turtles", 4]]

function getKeysAndValues(obj) {
  return Object.entries(obj);
}

console.log(getKeysAndValues(objectToArray));
// delete

delete objectToArray.cats;
console.log(objectToArray);

// Object.hasOwnProperty()
const objectUserInfo = {
  userName: "Zain",
  age: 22,
};
console.log(objectUserInfo.hasOwnProperty("add"));
// Object.seal()
Object.seal(objectUserInfo);

objectUserInfo.add = "Berlin";
console.log(objectUserInfo);

// [{},{},{}]

// [[],[],[]]
/* {
  ob1:{

  },
  ob2:{},

} */

const hadiData = {
  name: "Hadi",
  age: 31,
  kids: [
    { name: "Zain", age: 6, class: "1st" },
    { name: "Anna", age: 11 },
  ],
};
console.log(hadiData.kids[0].age); // 22
console.log(hadiData.kids[1]["age"]); //  11
console.log(hadiData.kids[1]); // { name: 'Anna', age: 11 }

console.log("----------------");
// Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

// Examples:

// (4, { min: 0, max: 5 }) ➞ true

// (4, { min: 4, max: 5 }) ➞ true

// (4, { min: 6, max: 10 }) ➞ false

// (5, { min: 5, max: 5 }) ➞ true

function isWithInTheRange(num, obj) {
  //      4 >=   0    &&    4  <=   5  -> true
  // console.log(num >= obj.min);
  return num >= obj.min && num <= obj.max;
}
console.log(isWithInTheRange(4, { min: 0, max: 5 }));
console.log(isWithInTheRange(0, { min: 33, max: 55 }));
console.log("----------------");

// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
// [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]
const scrabble = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

function sumTotalScrabble(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]["score"]; // 1  5   10  8  2  1  1 = 28
  }
  return total;
}
console.log(sumTotalScrabble(scrabble));
//console.log(scrabble[0]["score"]);
// other way soon
const sumTotalScrabbleAdvancedVersion = (arr) => {
  return arr.reduce((acc, cur) => acc + cur.score, 0);
};
console.log(sumTotalScrabbleAdvancedVersion(scrabble));

console.log("----------------");
// Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.

// Examples:

// {} ➞ true

// {a: 1} ➞ false

function isEmpty(obj) {
  return Object.keys(obj).length == 0;
}
console.log(isEmpty({}));
console.log(isEmpty({ a: 1 }));
console.log("----------------");

// Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

// Example:

// countLetters("tree") ➞ {t: 1, r: 1, e: 2}

function countLetters(str) {
  let arr = str.split("");
  let result = {};
  function countOccurrences(string, letter) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === letter) {
        counter++;
      }
    }
    return counter;
  }
  for (let i = 0; i < arr.length; i++) {
    let currentChar = arr[i];
    result[currentChar] = countOccurrences(str, currentChar);
  }
  return result;
}
console.log(countLetters("tree"));
console.log("----------------");
// Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

// Examples:

// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false

// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true

// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false

const freeShipping = (obj) => {
  let pricesArr = Object.values(obj); // [13.99,15.5,13.99]
  let shoppingQueen = 50;
  let totalOrder = pricesArr.reduce((acc, cur) => acc + cur, 0);
  return totalOrder > shoppingQueen;
};
console.log(
  freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 }) // false
);
console.log("----------------");

// Programming Object.

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log(programming);
// Change the difficulty to the value of 7.
programming.difficulty = 7;
console.log(programming);

// Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming);

// Write a command to add a new key called isFun and a value of true to the programming object.
programming["isFun"] = true;
// Using a loop, iterate through the languages array and console.log all of the languages.
let lang = programming.languages;
for (let i = 0; i < lang.length; i++) {
  console.log(lang[i]);
}
// Using a loop, console.log all of the keys in the programming object.
let myKeys = Object.keys(programming);
for (let keys of myKeys) {
  console.log(keys);
}
// for in
// for of

// Using a loop, console.log all of the values in the programming object.
let myVal = Object.values(programming);
for (let values of myVal) {
  console.log(values);
}
// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.
// Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.
programming.worthTry = function () {
  if (this.isChallenging && this.isRewarding) {
    return `Learning the programming languages ${this.languages}  is rewarding and challenging.`;
  }
};

// Bonus:

// Make sure that any other code cannot delete or change properties of the object.
Object.seal(programming);
console.log("----------------");

// Bonus
// Create a function that returns an object has following output, try this one in Advance array methods 💪🏻

// Examples:

// ABC -> { A: 1, B: 1, C: 1 } QQQ -> { Q: 3}
const countLettersAdc = (str) => {
  let arr = str.toLowerCase().split("");
  console.log(arr);
  let result = arr.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});
  return result;
};
console.log(countLettersAdc("tree"));

// Zodiac sign, write a function that tells the user his/her Zodiac sign. The user should enter only his birthday like dd-mm-yy
// for farther information check https://en.wikipedia.org/wiki/Zodiac
// Examples:
// zodiac("14-02-2002")  -> Aquarius
// zodiac("10-06-1984")  -> Gemini

function zodiac(yearStr) {
  let arr = yearStr.split("-");
  console.log(arr);
  const result = {
    birthDay: arr[0],
    birthMonth: arr[1],
    birthYear: arr[2],
    yourZodiac: function () {
      data = [
        { signName: "Not real day!", from: "0000" },
        { signName: "Capricorn", from: "0101" },
        { signName: "Aquarius", from: "0120" },
        { signName: "Pisces", from: "0220" },
        { signName: "Aries", from: "0321" },
        { signName: "Taurus", from: "0420" },
        { signName: "Gemini", from: "0521" },
        { signName: "Cancer", from: "0621" },
        { signName: "Leo", from: "0723" },
        { signName: "Virgo", from: "0823" },
        { signName: "Libra", from: "0923" },
        { signName: "Scorpio", from: "1023" },
        { signName: "Sagittarius", from: "1123" },
        { signName: "Capricorn", from: "1222" },
        { signName: "Not real day!", from: "1232" },
      ];
      // Extra Protection
      // if (this.birthDay > 31 || this.birthMonth >12){
      //   return "this is not a valid date"
      // }
      let monthDay = this.birthMonth + this.birthDay;
      console.log(monthDay);
      let i = 0;
      while (monthDay >= data[i].from && i < data.length) {
        i++;
      }
      let yourZodiacName = data[i - 1].signName;
      return `your Zodiac sign name ${yourZodiacName}`;
    },
  };
  return result.yourZodiac();
}
console.log(zodiac("10-06-1989"));
console.log(zodiac("14-02-2002"));
