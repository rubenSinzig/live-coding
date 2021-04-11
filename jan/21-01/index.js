function display(str) {
  console.log(str);
}
// Functions declarations as values:
// const functionName = function(parameters){ ... }

const sum = function (x, y) {
  return x + y;
};
// const functionName = (parameters) =>{ ... }
const print = (str) => {
  console.log(str);
};
sum(3, 4);

// Invoke the function
function login() {
  // some things
  halloUser();

  // more steps
}

function halloUser() {
  // call other function
  return `Hej, welcome back`;
}

login();
// call stack

// Never do this one 😏
// function one() {
//   two();
// }
// function two() {
//   one();
// }
// one();

// .map()

// for(let i=0;i<Array.length;i++){
// some code here is my Gift i and currentValue
//}
const names = ["Zain", "Olga", "Nancy"];
const cities = ["Berlin", "Paris"];
const newArr = names.map((name, i) => {
  if (name == "Nancy") {
    console.log("I don't Like you");
  }
  console.log(`this ${name} has index ${i}`);
});
// Array.map( ()=>{})
const newCity = cities.map((city, index) => console.log(city));
// .reduce()
const numArr = [1, 2, 2, 2, 2];
const reducer = numArr.reduce((acc, cur) => acc + cur, 50);
console.log(reducer);

// break;
// Breaking out of a loop:
/*

T
TT
TTT
TTTT

*/
let TBox = "";
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    if (i == j) {
      break;
    } else {
      TBox += "T";
      console.log(TBox);
    }
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i == 4) {
    break;
  }
}
// here

// continue;
// Skipping an iteration:

for (let i = 1; i <= 10; i++) {
  if (i == 4) {
    continue;
  } else {
    console.log(i);
  }
}
const arr1 = [2, 2, 2, 3, 3, 44, 55, 44, 55];
const cleanUp = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.includes(arr[i])) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(cleanUp(arr1));
