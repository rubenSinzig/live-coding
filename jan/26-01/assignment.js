// const userPrint = (Parameters or Arguments) => {}
//
// const halloUser = (userName = "default value") => {
//  console.log(`Hi ${userName}.`)
// }
// halloUser();
// halloUser("Paul");
//
// const arr = ["Paul", "Sabine", "Mike", "Martina"];
// const arrClone = [...arr]; // Clone the arr
//
// const printThings = (userName = "default Name", age, ...args) => { // ...args creat a Array with the user input
//  console.log(`Hi ${userName} I am ${age}, you like ${args}.`)
// };
// printThings("Paul", 31, "Coding", "Sport", "Drawing", "Do fun things");
//
// (function welcomeFunction() {
//   console.log(`Welcome back.`)
// })();
console.log("-------- assignment One --------");
// Write a function that it returns  “Two for me and one for you” when no arguments are passed
// e.g
// console.log(twofer("Fran")) ---> "Two for me and one for Fran"
// console.log(twofer()) ---> "Two for me and one for you"
const twofer = (userName = "you") => {
  return `Two for me and one for ${userName}`;
};
console.log(twofer("Fran"));
console.log(twofer());
console.log("-------- assignment Two --------");
// Write a function that it still calculates the power of a number
// even if the exp argument is not passed to it. The default exp should be set to 2.
// e.g
// console.log(exponent(3, 3)) ---> 27
// console.log(exponent(3)) ---> 9
const exponent = (numOne, numTwo = 2) => {
  return Math.pow(numOne, numTwo);
};
console.log(exponent(3, 3));
console.log(exponent(3));
console.log("-------- assignment Three --------");
// Write a function that it returns the total amount of arguments passed to it.
// e.g
// console.log(howManyArgs()) ---> 0
// console.log(howManyArgs(1, false, "hello")) ---> 3
// console.log(howManyArgs("better")) ---> 1
const howManyArgs = (...args) => {
  return args.length;
};
console.log(howManyArgs());
console.log(howManyArgs(1, false, "hello"));
console.log(howManyArgs("better"));
console.log("-------- assignment Four --------");
// Write a function which accepts any amount of numbers and return the sum of their addition
// e.g
// console.log(sum(1)) ---> 1
// console.log(sum(1, 15)) ---> 16
// console.log(sum(25, 25, 20)) ---> 70
console.log("-------- assignment Five --------");
// Bonus: Write a function which accepts any amount of numbers and returns the average.
// e.g
// console.log(average(0)) ---> 0
// console.log(average(1, 2)) ---> 1.5
// console.log(average(1, 3, 6, 10)) ---> 5
// console.log(average(12, 14, 16)) ---> 14
console.log("-------- assignment End --------");
