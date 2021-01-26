// const userPrint = (Parameters or Arguments) => {}
//
//
// const halloUser = (userName = "default value") => {
//  console.log(`Hi ${userName}.`)
// }
// halloUser();
// halloUser("Paul");
//
//
// const arr = ["Paul", "Sabine", "Mike", "Martina"];
// const arrClone = [...arr]; // Clone the arr
//
//
// const printThings = (userName = "default Name", age, ...args) => { // ...args creat a Array with the user input
//  console.log(`Hi ${userName} I am ${age}, you like ${args}.`)
// };
// printThings("Paul", 31, "Coding", "Sport", "Drawing", "Do fun things");
//
//
// (function welcomeFunction() {
//   console.log(`Welcome back.`)
// })();
//
//
// .map(item, index)
// const books = ["Book One", "Book Two", "Book Three"];
// const printBook = books.map((item, index) => `${index}. title ${item}`);
//
//
// .reduce(acc, cur)
//
//
// .filter(item)
//
//
// .find()
//
//
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
const sum = (...num) => {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result += num[i];
  }
  return result;
};
console.log(sum(1));
console.log(sum(1, 15));
console.log(sum(25, 25, 20));
console.log("-------- assignment Five --------");
// Bonus: Write a function which accepts any amount of numbers and returns the average.
// e.g
// console.log(average(0)) ---> 0
// console.log(average(1, 2)) ---> 1.5
// console.log(average(1, 3, 6, 10)) ---> 5
// console.log(average(12, 14, 16)) ---> 14
const average = (...num) => {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result += num[i];
  }
  return result / num.length;
};
console.log(average(0));
console.log(average(1, 2));
console.log(average(1, 3, 6, 10));
console.log(average(12, 14, 16));
console.log("-------- hackerSpeak --------");
// c4n y0u r34d th15? Create a function that takes a string as an argument
// and returns a coded (h4ck3r 5p34k) version of the string.
// NB: for your program to work properly, the function should replace
// all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
// Examples:
// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
const hackerSpeak = (str) => {
  let result = [];
  const strToArr = str.toLowerCase().split("");
  // console.log(strToArr);
  const hackerLanguage = strToArr.map((item, index) => {
    switch (item) {
      case "a":
        result.push(4);
        break;
      case "e":
        result.push(3);
        break;
      case "i":
        result.push(1);
        break;
      case "o":
        result.push(0);
        break;
      case "s":
        result.push(5);
        break;
      default:
        result.push(item);
    }
  });
  return result.join("");
};
console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));
console.log("-------- Odds and Evens --------");
// Odds and Evens.
// Create a program that changes a given array by adding 1 to each odd integer
// and subtracting 1 from each even integer.
// Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
const oddsOrEvens = (arr) => {
  let result = [];
  const oddEven = arr.map((item, index) => {
    if (item % 2 == 0) {
      result.push(item - 1);
    } else {
      result.push(item + 1);
    }
  });
  return result;
};
console.log(oddsOrEvens([3, 5, 2, 4]));
console.log(oddsOrEvens([6, 9, 10, 20]));
console.log("-------- how many chr in a str --------");
// how many chr in a str(not case sens)
// howManyStr(“I like pizza”,“p”) -> 1
const howManyStr = (str, letter) => {
  let result = 0;
  let strToArr = str.split("");
  // console.log(strToArr);
  const counter = strToArr.map((item, index) => {
    if (item == letter) {
      result++;
    }
  });
  return result;
};
console.log(howManyStr("I like pizza", "p"));
console.log("-------- assignment End --------");
