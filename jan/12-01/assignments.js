// Create a function that takes a number.
// as its only argument and returns true .
//if it's less than or equal to zero,
// otherwise return false.

// Examples:

// isLEQZero(3) ➞ false
// isLEQZero(0) ➞ true
// isLEQZero(-4) ➞ true
// isLEQZero(10) ➞ false
const isLEQZero = (num) => {
  return num <= 0;
};
console.log(22 == 0);

console.log(isLEQZero(3)); //

//  Number to Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//  here are the months array as a small help :)
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Examples:

// monthName(3) ➞ "March"
//
const monthName = (monthNum) => {
  let theNum = monthNum - 1;
  let result = "";
  if (theNum >= 0 && theNum <= 11) {
    result = months[theNum];
  } else {
    result = `Sorry, you need to enter number between 1 and 12`;
  }
  return result;
};
console.log(monthName(3000));
console.log(monthName(1));

/* create a function should.
 that checks if a store contains a specific product.
  in it's inventory.
for example:
let storeArr= ["milk", "eggs", "cheese", "butter"];
// try includes might help :)

// Examples

inventoryCheck("cheese") returns true
inventoryCheck( "ham") returns false 
*/
let storeArr = ["milk", "eggs", "cheese", "butter"];
const inventoryCheck = (str) => {
  return storeArr.includes(str);
};

console.log(inventoryCheck("ham"));
console.log(inventoryCheck("cheese"));

//  A Lifetime Supply...
// You just won a lifetime supply of your favorite snack! .
//The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime".
// Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments:
// person age and the amount he will eats per day.
// The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.

// Examples:

// calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"

// calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"

const calcLifetimeSupply = (age, amountPerDay) => {
  // let result = 0;
  let amountPerYear = amountPerDay * 365;
  let yearsToLive = 100 - age;
  let result = amountPerYear * yearsToLive;

  return `The snack company should provide you with ${result} units, until you are a ripe old age of 100. Happy snacking!`;
};
console.log(calcLifetimeSupply(40, 3));
/*
Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
  12345
  1234
  123
  12
  1
*/

const numbersCount = () => {
  let text;
  //           4>=0
  for (let i = 5; i >= 0; i--) {
    // something
    // i = 3
    text = "";
    // text = ""
    //                5<=4
    for (let j = 1; j <= i; j++) {
      // j= 5
      // something
      text += j;
      // "123"+ 4
    }
    // something
    console.log(text);
    // "1234"
  }
};

numbersCount();

//  Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years.
//PS:  calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

// Example:

// dogAge(4) ➞ "Your doggy is 28 years old in dog years!"
const dogAge = (dogAgeInHuman) => {
  let result = dogAgeInHuman * 7;
  return `Your doggy is ${result} years old in dog years!`;
};

console.log(dogAge(4));

// Count Occurrences.
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Example:

// countOccurrences("this is a string", "i") ➞ 3

const countOccurrences = (str, letter) => {
  //let result = str.split("");
  //console.log(result);
  // let counter = 0;
  // for (let i = 0; i < result.length; i++) {
  //   if (result[i] == letter) {
  //     counter++;
  //   }
  // }
  let result = str.split(letter).length - 1;

  return result;
};

console.log(countOccurrences("this is a string", "i")); // 3
console.log(countOccurrences("xoxoxoxoxoxox", "x")); //7
console.log(countOccurrences("x", "Y")); // 0

// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password
// Examples:
// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP

const passwordGen = () => {
  let characters = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    6,
    7,
    8,
    9,
    "!",
    "§",
    "$",
    "%",
    "&",
    "?",
    "@",
    "€",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let result = "";
  let randomNum;

  for (let i = 0; i <= 30; i++) {
    randomNum = Math.floor(Math.random() * characters.length);
    // result = result + characters[randomNum];
    result += characters[randomNum];
  }
  return result;
};

// console.log(passwordGen());
// other way
let numbers = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
let alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let charactersSp = ["!", "§", "$", "%", "&", "?", "@", "€"];
const passGen = () => {
  let result = "";
  const randomNum = (arr) => {
    let num = Math.floor(Math.random() * arr.length);
    return num;
  };
  for (let i = 0; i < 17; i++) {
    if (i % 2 == 0) {
      // randomNum = Math.floor(Math.random() * numbers.length);
      result += numbers[randomNum(numbers)];
    }
    if (i % 3 == 0) {
      // randomNum = Math.floor(Math.random() * alpha.length);
      result += alpha[randomNum(alpha)];
    } else {
      // randomNum = Math.floor(Math.random() * alpha.length);
      result += alpha[randomNum(alpha)].toUpperCase();
    }
    if (i % 5 == 0) {
      // randomNum = Math.floor(Math.random() * charactersSp.length);
      result += charactersSp[randomNum()];
    }
  }

  return result;
};

console.log(passGen());
