console.log(x);
var x;
x = true;
//x= "";
//x = null;
//x = 199;
//x = undefined;
console.log(typeof x);
sum(3, 4);
sum(3900, 334);

function sum(x, y) {
  return x + y;
}
let bool = " ";
bool ? console.log("cool") : console.log("Not cool");

// bracket notation [0]
let str = "Hadi";
console.log(str[str.length - 1]);
// .trim()
let LongStr = "    Hi I am Hadi      ";
console.log(LongStr.trim());

function display(str) {
  console.log(str);
}
display("Zain");

// Numbers
let y = 3;
let w = 44;
// + - * /
console.log(y % w);
// (123) (23.4)
let int1 = "122";
let int2 = "1.5";
console.log(int1 + " " + int2);
// isNaN
isNaN(int1) ? console.log("Yeah it's not a number") : console.log("Nope sorry");
let intSum = int1 + int2;
console.log(intSum);
let newNum = parseInt(int1, 10);
console.log(newNum);
intSum = newNum + int2;
console.log(intSum);
let newFloat = parseFloat(int2);
console.log(newFloat);

//1. Create two variables.
// One variable should contain a string value and
//the other should contain a number. Concatenate the string and the number.
let str1 = "This is a string";
let int101 = 22;
let longStr1 = str1 + int101;
console.log(longStr1);
//2. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
//(33, 40, 2,1,22)

let numb = 22;
let numX = numb % 2;
console.log(numX);
console.log(numX == 0 ? `${numb} is even` : `${numb} is odd`);

function oddOrEven(num) {
  return num % 2 == 0 ? "even" : "odd";
}
console.log(oddOrEven(33));
console.log(oddOrEven(4));
console.log(oddOrEven(44));

// * + - /
let a = 3;
let b = 2;
let sum1 = a + b;
let div = a / b;
let mul = a * b;
let sub = a - b;
console.log(sum1, div, mul, sub);
// ++ --
++a;
b--;
// **
let power = 2 ** 2;
console.log(power);
// Math.floor()
// 3.33
let float1 = 1.8;
let realInt = Math.floor(float1);
console.log(realInt);
// Math.ceil()
let realInt2 = Math.ceil(float1);
console.log(realInt2);
// Math.max()
console.log(Math.max(2, 33, 434, 643, 123211, -212));
// Math.min()
console.log(Math.min(2, 33, 434, 643, 123211, -212));
// Create a variable with the value of “123”. Convert it to a number.
let strToInt = "123";
// console.log(parseInt(strToInt.10));
console.log(parseInt(strToInt));
// Create a variable with the value of “130.7". Convert it to a number.
let strToFloat = "130.7";
console.log(parseFloat(strToFloat));
// Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’
let isDog = "";
console.log(isDog ? "pat, pat" : "find me a dog to pat!");
