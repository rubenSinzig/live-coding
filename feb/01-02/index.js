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
console.log(add());

// SIAF
// self-invoking anonymous function

// IIFE
// Immediately-invoked Function Expression

// loops

// if .. else

// ternary Operator

// trim()

// trimEnd()

// trimStart()

// startsWith()

// endsWith()

// charAt()

// charCodeAt()
//  will return integer between 0 and 65535 that replaces the UTF-16 code
// common character codes UTF-16  UTF-8  ASCII   A 00001111
