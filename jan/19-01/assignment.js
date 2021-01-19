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
//
console.log("---------------------");
