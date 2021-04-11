// let, var, const local vs global
// global
// {
// // local
// }

// functions inside functions
//
function main(num1, num2) {
  // outer function
  function second(n) {
    // inner function
    return n * n;
  } //      9       +       16        = 25
  return second(num1) + second(num2);
}

console.log(main(3, 4));

// Nested scopes: Accessing outer global variables
let nice = true;
const outerFunction = (x, y) => {
  let big = true;
  console.log(big + " outerFunction");
  const innerFunction = (num) => {
    big = false;
    nice = false;
    let fat = true;
    console.log(`innerFunction : big =  ${big}, nice = ${nice}`);
    return num + 10;
  };
  // console.log(fat);
  //            13        +      14  =    27
  return innerFunction(x) + innerFunction(y);
};
console.log(outerFunction(3, 4));
//console.log(fat);
// Closure
let number = 10;
function fun() {
  return number + number;
}
console.log(fun());
number = 33;
console.log(fun());

// invoking == calling
// functions that return other function
const add = (() => {
  let counter = 0;

  return () => {
    counter++;
    return counter;
  };
})();

console.log(add());
console.log(add());

// SIAF
// self-invoking anonymous function
(function () {
  console.log("Hi");
})();
(() => {
  console.log("Hi");
})();
// IIFE
// Immediately-invoked Function Expression
const sum = ((x, y) => {
  return x + y;
})(3, 4);

console.log(sum);

// Write a function add that uses a closure that performs addition on arguments in two separate function calls.
//add(2)(3)

const add2 = (a) => {
  return (b) => {
    return a + b;
  };
};
console.log(add2(2)(3));

// Write a function multiplier that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called.
function multiplier(num) {
  // outer function
  return (x) => x * num; // inner function
}
const times = multiplier(2)(5);
console.log(times);

let all = 3;
(() => {
  let all = "hey";
  console.log(all);
})();
console.log(all);

/* Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:
The current age of the person // e.g. 40
The retirement age of the person // e.g. 60
The monthly wage the person earns // e.g. 1000
The percentage (as integer) that the person saves each month // e.g. 10%
If the person has already retired then the message 'You're already retired!' should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
Output: $30000 */

((currentAge, retirementAge, monthlyWage, percentage) => {
  if (currentAge >= retirementAge) {
    console.log("You are too old");
  } else {
    let yearsToSave = retirementAge - currentAge;
    console.log("Years to go ", yearsToSave);
    let monthsToSave = yearsToSave * 12;
    console.log("Months to go ", monthsToSave);
    let amountSavedByMonth = (monthlyWage * percentage) / 100;
    let totalSave = amountSavedByMonth * monthsToSave;
    console.log(
      `you will go very old in ${yearsToSave}, and you will have ${totalSave} in in your bank`
    );
  }
})(40, 65, 2000, 5);

// if .. else
// let fat = true;
// let isNormal = false
// if (fat) {
//     if (isNormal){
//         // this is cool
//     }
//   console.log("You need to eat less");
// } else if (){}
// else if()

// ternary Operator

// console.log(fat ? "Noo I like food" : null);
// loops

// trim()
let str = "   hi    ";
console.log(str.trim());
// trimEnd()
console.log(str.trimEnd());
// trimStart()
console.log(str.trimStart());
// startsWith()
let text = "Hej, it's ME";
console.log(text.startsWith("we"));
console.log(text.startsWith("Hej"));
// endsWith()
console.log(text.endsWith("."));
console.log(text.endsWith("s ME"));
// charAt()
let chr = "Ü";
console.log(chr.charAt(0)); // == console.log(chr[0]);
console.log(chr[0]);
// arr[i][0]
const arr = ["Hadi", "Olga"];
console.log(arr[0][0] + arr[0][3]);
// charCodeAt()
//  will return integer between 0 and 65535 that replaces the UTF-16 code

// common character codes UTF-32 UTF-16  UTF-8  ASCII   A 00001111

// ASCII = American Standard Code for Information Interchange
console.log(chr.charCodeAt(0));
