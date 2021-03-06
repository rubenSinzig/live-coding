console.log("--------Exercise-------");
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
// Examples:
// isLEQZero(3) ➞ false
// isLEQZero(0) ➞ true
// isLEQZero(-4) ➞ true
// isLEQZero(10) ➞ false
const isLEQZero = (numb) => {
  if (numb <= 0) {
    console.log(true);
  }
  else {
    console.log(false);
  }
};
isLEQZero(0); // change the number inside the () to see if it's true or false
console.log("--------Exercise-------");
//  Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years.
//PS:  calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.
// Example:
// dogAge(4) ➞ "Your doggy is 28 years old in dog years!"
const dogYears = (numb) => {
  let dog = numb * 7;
  console.log(`Your doggy is ${dog} years old in dog years!`);
}
dogYears(4); // Change the dog's age inside the () to see in human years
console.log("--------Exercise-------");
//  A Lifetime Supply...
/*
  You just won a lifetime supply of your favorite snack!
   The snack company needs to calculate what that actually means and
   how much they need to give you over your "lifetime". Create a function
   to help you calculate that amount for yourself to make sure you get the right amount.
   The function should accept two arguments: person age and the amount he will eats per day.
   The function should calculate the amount that will be consumed for the rest of your life
   given a constant maximum age of 100.
*/
// Examples:
// calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"
// calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"
const calcLifetimeSupply = (age, amount) => {
  const maxAge = 100;
  let amountInYear = amount * 365.25;
  let units = (maxAge - age) * amountInYear;
  // i can't find a solution to add a "," between the thousands and hundreds
  console.log(`The snack company should provide you with ${Math.round(units)} units, until you are a ripe old age of ${maxAge}. Happy snacking!`);
};
calcLifetimeSupply(25, 2); // Change the age and amount of units per day to see how much the company need to give you
console.log("--------Exercise-------");
//  Number to Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//  here are the months array as a small help :)
//   let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// Examples:
// monthName(3) ➞ "March"
// monthName(12) ➞ "December"
// monthName(6) ➞ "June"
const monthName = (numb) => {
  let months = [ "January",
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
  console.log(months[--numb]);
};
monthName(3); // Change the number from 1-12 inside the () to see the month
console.log("--------Exercise-------");
// Try to do it by yourself and don't look in yesterday solution. I trust you :)
// Count Occurrences.
/*
Create a function that accepts two arguments: a string and a letter.
The function should count the number of occurrences of that letter in the string.
*/
// Example:
// countOccurrences("this is a string", "i") ➞ 3
const countOccurrences = (str, letter) => {
  let counter = 0;
  let strToArray = str.split("");
  // console.log(strToArray);
  for (i = 0; i < strToArray.length; i++) {
   if (strToArray[i] == letter) {
     counter++;
   }
  }
  console.log(counter);
};
countOccurrences("this is a string", "i");
countOccurrences("Hi I am Ruben", "u");
console.log("--------Exercise-------");
/*  draw this shapes in your console
First shape
T
TT
TTT
TTTT
Second shape
****
***
**
*
Third shape
1
12
123
1234
12345
Bounce: Forth shape
Be creative and show us your Artistic side
*/
console.log(`First shape\nT\nTT\nTTT\nTTTT\n`);
console.log(`Second shape\n****\n***\n**\n*\n`);
console.log(`Third shape\n1\n12\n123\n1234\n12345\n`);
// a movie character made of wood
console.log(`Forth shape\n\n         *******\n       ***********\n      **   ***   **\n      **   * *   **\n      *************\n            *************\n      *************\n      ****     ****\n       ***********\n        *********\n`)
console.log("--------Exercise-------");
/*  Finish the following function so it outputs looks like this:
1
12
123
1234
12345
 const numbersCount = () => {
  for (let i = 0; i <= 5; i++) {
    // something
    for (let j = 1; j <= i; j++) {
        // something
    }
      // something
  }
};
numbersCount();
Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
  12345
  1234
  123
  12
  1
*/
const numbersCount = () => {
  for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j +" ";
    }
    console.log(line);
  }
};
numbersCount();
const numbersCount2 = () => {
  for (let i = 5; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j +" ";
    }
    console.log(line);
  }
};
numbersCount2();
console.log("--------Exercise-------");
/* create a function should that checks if a store contains a specific product in it's inventory.
for example:
let storeArr= ["milk", "eggs", "cheese", "butter"];
// try includes might help :)
// Examples
inventoryCheck("cheese") returns true
inventoryCheck( "ham") returns false
*/
const inventoryCheck = (product) => {
  let storeArr= [
                "milk",
                "eggs",
                "cheese",
                "butter",
                ];
  // console.log(storeArr);
  let checkProduct = storeArr.includes(product, 0);
  if (checkProduct) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}
inventoryCheck("cheese");
console.log("--------Exercise-------");
// Extra work :)
// create a repo for this app. we are coming later to it :)
// Create a program that generate a random password with the length of 30 character,
// every time you call the function should give you a different password
// Examples you will have other passwords for sure
// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP
console.log("--------Exercise-------");