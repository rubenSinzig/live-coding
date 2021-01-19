const names = ["Zain", "Nancy", "Olga"];
const smileys = ["😎", "🤓", "🥳"];
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
// .slice()
// to make a shallow copy

let arr = [];

for (let i = 0; i < 5; i++) {
  arr.push(i);
}
console.log(arr);
