// .lenght .length -1
// !!!!! store deleted elements in a VAR !!!!!
// end .push() .pop()
// start .unshift() .shift()
// .indexOf()
// .splice(indexOf, how many) rm item
// for (let i = 0; i < array.length; i++) {}
// .split() str => arr
// .join() arr => str
// .concat() merge two or more arrays
// .slice(indexOf, end indexOf) shallow copy
// ________________________________________________
// Repeat it.
// Create a program with two variables:
// “item” and “times”.
// Create a program that repeats the “item” as many times as specified by “times”.
// The first variable (“item”) is the item that needs repeating while
// the second argument (“times”) is the number of times the item is to be repeated.
// Print the result in an array.
// Examples:
// (“example”, 3) ➞ [“example”, “example”, “example”]
let item = "example";
let times = 3;
const repeat = (str, num) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr = str.repeat(num);
  }
  // TIME IS OVER NOT FINISH
  console.log(arr);
};
repeat(item, times);
console.log("---------------------");
// The Greater Numbers.
// Create a function which accepts two arguments:
// the first argument being an array of numbers,
// and the second argument being a number.
// The function should return the elements of the array which are greater than the second argument.
// i.e.
// findGreatest([3, 4, 5], 4) ➞ 5
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10
const findGreatest = (arr, num) => {
  // let greaterThanNum;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
  // not enough time to find out how to print it in one line.
  // like this: findGreatest([10, 20, 30], 12) ➞ 20, 30
};
findGreatest([3, 4, 5], 4);
findGreatest([10, 20, 30], 12);
findGreatest([0, 10, 3], 4);
console.log("---------------------");
// AEIOU:
// Vowels.
// Create a function that takes a string in its parameters and counts the number of vowels
// (i.e. in English, “a, e, i, o, u”) in the string.
// i.e. findVowels(“this is a string”) ➞ 4
const findVowels = (str) => {
  let counter = 0;
  let strToArr = str.split("");
  // console.log(strToArr);
  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i].includes("a")) {
      counter++;
    } else if (strToArr[i].includes("e")) {
      counter++;
    } else if (strToArr[i].includes("i")) {
      counter++;
    } else if (strToArr[i].includes("o")) {
      counter++;
    } else if (strToArr[i].includes("u")) {
      counter++;
    }
  }
  return counter;
};
console.log(findVowels("this is a string"));
// not my solution
// const findVowels = (str) => {
//     let counter = 0;
//     const vowels = ['a','e','i','o','u'];
//     let strToArr = str.split("");
//     console.log(strToArr);
//     for (let i = 0; i < strToArr.length; i++) {
//       for (let j = 0; j < vowels.length; j++) {
//         if (strToArr[i] === vowels[j]) {
//           counter++;
//         }
//       }
//     }
//     return counter;
//   };
//   console.log(findVowels("thiis is a string"));
// 1 step   i = 0 j = 0
// 2 step   i = 0 j = 1
// 3 step   i = 0 j = 2
// 4 step   i = 0 j = 3
// 5 step   i = 0 j = 4
// 6 step   i = 0 j = 5
// 7 step   i = 1 j = 0
// 8 step   i = 1 j = 1
// .........i = 1 j = 5
//.......... i = 15 j = 5 --> end of loops
// WRONG
// let strOne = "a, e, i, o, u";
// let strTwo = "this is a string";
// let strThree = "a, a, a, c";
// const findVowels = (str) => {
//   let strToArr = str.split(" ");
//   // console.log(strToArr);
//   return strToArr.length;
// };
// console.log(`a, e, i, o, u -> ${findVowels(strOne)}`);
// console.log(`this is a string -> ${findVowels(strTwo)}`);
// console.log(`a, a, a, c -> ${findVowels(strThree)}`);
console.log("---------------------");