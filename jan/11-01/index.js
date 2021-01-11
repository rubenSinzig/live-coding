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
  //console.log(`${i} * 1 = ${i * 1}`);
  console.log(i, " * 1 = ", i * 1);
}
