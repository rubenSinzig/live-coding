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
(function printMyName(x, y) {
  console.log(`Hi I am cool function ${x + y}`);
})(2, 3);

// printMyName()

// .map
// Converting an array to a different array: `Array.prototype.map(<function>)`

// .filter
// - Getting an array with items that aline with your condition: `Array.prototype.filter(<function>)`

// .find
// - Getting a the first item that aline with your condition : `Array.prototype.filter(<function>)`
//  Maybe more 😏
