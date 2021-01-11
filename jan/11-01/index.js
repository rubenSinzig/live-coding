// old school function
// function print(str) {
//   console.log(str);
// }
// Es 6
const print = (str) => {
  console.log(str);
};

const display = (str) => {
  console.log(str);
};

print("Hi");
display("cool");
console.log(typeof print);

const sum = (x, y) => x + y;
console.log(sum(3, 4));

const isBigger = (num1, num2) => num1 < num2;
console.log(isBigger(33, 43));

const printFullWord = (firstName, age, add) =>
  console.log(`Hi ${firstName}, I am ${age}, I live in ${add}`);

printFullWord("Hadi", 31, "Berlin");
printFullWord("Zain", 22, "Paris");

let isLogged = false;
const login = () => {
  isLogged = true;
};

login();

let name1 = "Hadi";
let name2 = "Zain";
let name3 = "Nancy";
//                 0       1    2
let namesArr = ["Hadi", "Zain", "Olga"];
console.log(namesArr[2]);
const numbers = [2, 0, 8, 3, 5, 1, 6, 4, 7, 9];
console.log(numbers[5]);

const funThingsToDo = ["eat", "sleep", "repeat"];
// DRY
// let i = 0;
// console.log(funThingsToDo[i]);
// i++;
// console.log(funThingsToDo[i]);
// i++;
// console.log(funThingsToDo[i]);

// loops
// i = 0       length = 3
for (let i = 0; i < funThingsToDo.length; i++) {
  console.log(funThingsToDo[i]);
}
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  // 1 * 1 = 1
  console.log(`${i} * 1 = ${i * 1}`);
  //   console.log(i, " * 1 = ", i * 1);
}
const longArr = ["Hi I am, Coo to see you in.", "Hi I am"];
console.log(longArr.length);
const mixedArr = ["hi", 1222, true];
console.log(typeof mixedArr);
const chrArr = ["a", "b", "c"];
// index
for (let i = 0; i < chrArr.length; i++) {
  //             a.toUpperCase() => A
  console.log(chrArr[i].toUpperCase());
}
const names = ["hadi", "nancy"];
// names[0][0]
let str = "";
for (let i = 0; i < names.length; i++) {
  //             a.toUpperCase() => A
  str = "";
  str = names[i][0].toUpperCase() + names[i].substring(1);
  console.log(str);
}
console.log(names[0]);

//console.log(1 == 11 ? "cool" : "nooooo");
let isSmart = false;
if (isSmart) {
  console.log("coool");
} else {
  console.log("nooooo");
}
let count = 0;
if (22 * 3 == 299 + 3) {
  count++;

  console.log("You are nice");
} else {
  count--;
  // \' \"  ignore
  // \n new line
  console.log("No that's \n this is new line");
}

// functions, if else, objects ,scopes all with {}
// arrays, strings []
// if conditions, method, conditions function call ()
let a = true;
let b = false;
let c = 11 == 23;
if ((a == b && c != a) || c == a) {
  console.log("Wow");
} else {
  console.log("I don't know what you need from me 🤓 ");
}
