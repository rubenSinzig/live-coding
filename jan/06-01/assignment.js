// 1. Minimum and maximum
// a. Lowest Number
// Print out the lowest number between -1 and 4.

console.log(Math.min(-1, 0, 1, 2, 3, 4));

// b. Highest Number
// Print out the highest number between -1 and 4.

console.log(Math.max(-1, 0, 1, 2, 3, 4));

// 2. Rounding
// a. Round up
// Round up each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 43.342.



// b. Round down
// Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.



// Strings and Numbers
// 1. Concatenation.
// Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
// let introSentence = "Hi, my name is Nancy and I am";
// let age = 25;
// Expected Output:
// "Hi, my name is Nancy and I am 25"
// In this case, what is the + operator doing? Comment your answer in the js file.

let introSentence = "Hi, my name is Nancy and I am";
let age = 25;
console.log(introSentence + " " + age); // The + operator change the type of age(number) to a string.

// 2. Converting
// Create a variable with the value of “1005”. Convert it to a number.

let str1 = "1005";
console.log(parseInt(str1));

// Create a variable with the value of “10.05". Convert it to a number.

let str2 = "10.05";
console.log(parseFloat(str2));
