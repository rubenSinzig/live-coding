// 1. Create two variables.
// One variable should contain a string value and
// the other should contain a number. Concatenate the string and the number.

let int1 = "31";
let int2 = 2.5;
let int3 = int1 + int2;
console.log(int3);

// 2. Check if the following numbers are even numbers. 
// Use a ternary and if the number is even print 30 is even, else print that it is odd.
// 33, 40, 2, 1, 22

let num = 33;
num ? console.log("The Number is even.") : console.log("The Number is odd.");

// Create a variable with the value of “123”. Convert it to a number.

let str1 = "123";
console.log(parseInt(str1, 10));

// Create a variable with the value of “130.7". Convert it to a number.

let str2 = "130.7";
console.log(parseFloat(str2, 10));

// Declare a variable named isDog.
// If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’

let isDog = false; // true
isDog ? console.log("pat, pat") : console.log("find me a dog to pat!");
