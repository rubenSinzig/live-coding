const names = ["Zain", "Nancy", "Olga"];

// .length
// to get the number of elements in an array
console.log(names.length);
// .length -1
// to access the last item
console.log(names[names.length - 1]);

let cityName = [];
console.log(cityName.length);
cityName[0] = "Paris";
cityName[1] = "Berlin";
cityName[2] = "Dubai";

console.log(cityName);

// .push()
// add an item
cityName.push("Hi");
cityName.push("Hi");
cityName.push("Cool");
console.log(cityName);
// .pop()
// remove an item
cityName.pop();
cityName.pop();
let removedItem = cityName.pop();

console.log(cityName);
console.log(removedItem);

// .unshift()
// add an item to the beginning
cityName.unshift("🍀");
console.log(cityName);
//  .shift()
// remove an item to the beginning
let removeEle = cityName.shift();
console.log(cityName);
console.log(removeEle);
//const names = ["Zain", "Nancy", "Olga"];
// .indexOf()
// Find the index of an item
console.log(names.indexOf("Nancy"));
let pos = names.indexOf("Nancy");
// console.log(typeof pos);
let n = 0;
// // .splice()
// // remove an item by the index number
let removedItemFromIndex = names.splice(pos, n);
console.log(names);
console.log(removedItemFromIndex);
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
let str = "Hi this is me 😎";
// .split()
// divide a string into an array
let newArr = str.split(" ");
console.log(newArr);
// .join()
// create a string from an array
let newStr = newArr.join(" ");
console.log(newStr);

// .concat()
// merge two (or more) arrays
let arr1 = [1, 233, 55];
let arr2 = [33, 3, 55];
let arr3 = arr1.concat(arr2, [22, 4, 555, 44]);
console.log(arr3);

const add = ["Berlin", "Paris", "Pra", "Malaga", "Hi"];
let fakeCopy = add;
console.log(fakeCopy);
fakeCopy.push("Dubai");
console.log(add);
fakeCopy.pop();
console.log(add);
// .slice()
// to make a shallow copy
// [ 'Berlin', 'Paris', 'Pra', 'Malaga', 'Hi' ]
let shallowCopy = add.slice(1, 5); // 4
console.log(add.slice(1, 3));
console.log(shallowCopy);
shallowCopy.push("London");
console.log(shallowCopy);
console.log(add);

const smileys = ["😎", "🤓", "🥳"];
let otherArr = smileys.slice(0, 2); // 2
console.log(smileys);
console.log(otherArr);
// using a negative number in slice
let otherArr2 = smileys.slice(-2);
console.log(otherArr2);
// Create a program with two variables: “item” and “times”.
// Create a program that repeats the “item” as many times as specified by “times”.
// The first variable (“item”) is the item that needs repeating while the second argument (“times”) is the number of times the item is to be repeated.
// Print the result in an array. Examples:
// (“example”, 3) ➞ [“example”, “example”, “example”]

const rep = (item, times) => {
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push(item);
  }
  return result;
};
console.log(rep("Hadi", 3));

// The Greater Numbers.
//  Create a function which accepts two arguments:
// the first argument being an array of numbers,
//and the second argument being a number.
// The function should return the elements of the array which are greater than the second argument.
// i.e.
// findGreatest([3, 4, 5], 4) ➞ 5
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10
const findGreatest = (arr, num) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      result.push(arr[i]);
    }
  }
  return result.join(", ");
};

console.log(findGreatest([3, 4, 12, 44], 3));

let originalArray = [
  "JavaScript",
  "will",
  "turn",
  "your",
  "dreams",
  "into",
  "Reality",
];
let shallowCopyOg = originalArray.slice(-1); //

console.log(shallowCopyOg);
console.log(originalArray);

// Dictionary.
//  Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
// Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
// Examples:
// dictionary(“bu”, [“button”, “breakfast”, “border”]) ➞ [“button”]
// dictionary(“tri”, [“triplet”, “tries”, “trip”, “piano”, “tree”]) ➞ [“triplet”, “tries”, trip”]
// dictionary(“beau”, [“pastry”, “delicious”, “name”, “boring”]) ➞ []

const dictionary = (str, arr) => {
  let result = [];
  let userInput = str.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i].toLowerCase();

    if (currentValue.includes(userInput)) {
      result.push(currentValue);
    }
  }
  return result;
};
console.log(dictionary("bo", ["cool", "Bool", "nool", "doOOol"]));
console.log(dictionary("bolll", ["cool", "nool", "doOOol"]));
// other way to do it :)
const dictionary2 = (str, arr) => {
  let result = [];
  let userInput = str.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i].toLowerCase();
    let shortStr = currentValue.substring(0, userInput.length);
    if (shortStr == userInput) {
      result.push(currentValue);
    }
  }
  return result;
};

console.log(dictionary2("bo", ["cool", "Bool", "nool", "doOOol"])); // [ 'bool' ]
console.log(dictionary2("bo", ["ooBol", "nool", "doOOol"])); // empty array
