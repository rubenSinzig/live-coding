// parameters: Naming and order
const userPrint = (name, add, age) => {
  console.log(`Hi ${name},your age ${age} your address is ${add}. `);
};
userPrint("Hadi", "Berlin", 31);
// default value

const halloUser = (userName = "Zain") => {
  console.log(`Hi ${userName}. `);
};
halloUser();
halloUser("Hadi");
// Spread syntax ...
// ...array
const arr = ["Hi", "I", "You"];
const cloneArr = [101, ...arr, "super nice"];
cloneArr[0] = "cool";
console.log(cloneArr);
console.log(arr);

// ...args
const sum = (x, y) => x + y;
console.log(sum(2, 4));
const printFunThingsToDo = (userName, age, ...arr) => {
  console.log(arr);
  console.log(`Hi ${userName} I am ${age}, you like ${arr}`);
};
printFunThingsToDo(
  "Hadi",
  31,
  "Coding",
  "Cooking",
  "Do fun things",
  "Cool draws"
);

const numbers = (...nums) => {
  console.log(nums[nums.length - 1]);
};

numbers(2, 4, 5, 67, 7, 8, 3);
// cool functions
// self invoked functions
(function printMyName(x, y) {
  console.log(`Hi I am cool function ${x + y}`);
})(2, 3);

// printMyName()

// Write a function that it returns  “Two for me and one for you” when no arguments are passed
// e.g
// console.log(twofer("Fran")) ---> "Two for me and one for Fran"
// console.log(twofer()) ---> "Two for me and one for you"
const twoFor = (who = "you") => `Two for me and one for ${who}`;
console.log(twoFor("Zain"));
console.log(twoFor());
// Write a function  that it still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.
// e.g
// console.log(exponent(3, 3)) ---> 27
// console.log(exponent(3)) ---> 9
const exponent = (num, exp = 2) => num ** exp;
console.log(exponent(3));
const exponent2 = (num, exp = 2) => Math.pow(num, exp);
console.log(exponent2(3));
const exponent3 = (num, exp = 2) => {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    // 1 = 1 * 3
    // 3 * 3
    result *= num;
  }
  return result;
};
console.log(exponent3(3));
// Write a function that it returns the total amount of arguments passed to it.
// e.g
// console.log(howManyArgs()) ---> 0
// console.log(howManyArgs(1, false, "hello")) ---> 3
// console.log(howManyArgs("better")) ---> 1
const howManyArgs = (...args) => args.length;
console.log(howManyArgs(1, false, "hello"));
// Write a function which accepts any amount of numbers and return the sum of their addition
// e.g
// console.log(sum(1)) ---> 1
// console.log(sum(1, 15)) ---> 16
// console.log(sum(25, 25, 20)) ---> 70
const sum2 = (...args) => {
  let result = 0;

  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
};
console.log(sum2(25, 25, 20));
// Bonus: Write a function which accepts any amount of numbers and returns the average.
// e.g
// console.log(average(0)) ---> 0
// console.log(average(1, 2)) ---> 1.5
// console.log(average(1, 3, 6, 10)) ---> 5
// console.log(average(12, 14, 16)) ---> 14
const average = (...args) => {
  let result = 0;

  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result / args.length;
};
console.log(average(25, 25, 20));
// .map
// Converting an array to a different array: `Array.prototype.map(<function>)`

// .filter
// - Getting an array with items that aline with your condition: `Array.prototype.filter(<function>)`

// .find
// - Getting a the first item that aline with your condition : `Array.prototype.filter(<function>)`
//  Maybe more 😏
