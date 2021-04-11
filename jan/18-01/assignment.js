// Loops
for (let i = 0; i < 5; i++) {
  console.log("print out 5 times");
}
console.log("---------------");
let numb = 10;
for (let i = 0; i <= numb; i++) {
  if (i <= 1) {
    console.log(`There is ${i} star in the sky.`);
  } else {
    console.log(`There are ${i} star's in the sky.`);
  }
}
console.log("---------------");
for (let i = 10; i > 0; i--) {
  console.log(`i is now ${i}`);
}
console.log("---------------");
// ############# Assignment Start #############
// Mark and John are trying to compare their BMI (Body Mass Index).
// which is calculated using the formula: BMI = mass / (height * height).
//               (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
// Store Mark’s and John’s mass and height in variables.
// Calculate both their BMIs and store their BMIs in variables.
// Create a boolean variable containing information about whether Mark has a higher BMI than John.
// Print a string to the console containing the variable from step 3 using string interpolation. (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
// Create an if statement which prints the name and BMI of the person with the highest BMI.
const bmi = () => {
  // result = "";
  let markMass = 78.5;
  let markHeight = 1.82;
  let johnMass = 65;
  let johnHeight = 1.68;
  markBMI = markMass / (markHeight * markHeight);
  johnBMI = johnMass / (johnHeight * johnHeight);
  let bool = markBMI > johnBMI;
  console.log(`Is Mark’s BMI higher than John’s? It’s ${bool}.`);
  if (markBMI > johnBMI) {
    console.log(`Mark has an BMI of ${Math.round(markBMI)}.`);
  }
  if (johnBMI > markBMI) {
    console.log(`John has an BMI of ${Math.round(johnBMI)}.`);
  }
  // return result;
};
bmi();
console.log("---------------");
// More conditions
// Make a variable for firstName and age and give each variable values.
// Create an if/else statement to check whether the person’s age is less than 13.
// If so, print “firstName is a child”.
// If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”.
// If the person’s age is equal to and more than 20 and less than 30,
// then print “firstName is a young adult”.
// If none of these conditions apply, print “firstName is a adult”.
let firstName = "Jens";
let age = 30;
const checkAge = (nameFun, ageFun) => {
  let name = "";
  if (ageFun < 13) {
    name += `${nameFun} is a child`;
  } else if (ageFun >= 13 && ageFun < 20) {
    name += `${nameFun} is a teenager`;
  } else if (ageFun >= 20 && ageFun < 30) {
    name += `${nameFun} is a young adult`;
  } else {
    name += `${nameFun} is a adult`;
  }
  return name;
};
console.log(checkAge(firstName, age));
console.log("---------------");
// Capitalize.
// Create a program that capitalizes the first letter of each element in an array of names.
// Examples:
// [“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
// [“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]
let arrOne = ["matt", "sara", "lara"];
let arrTwo = ["samuel", "MARIA", "luke", "mary"];
let arrThree = ["Cynthia", "Karen", "Jane", "Carrie"];
const arrFirstLetter = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1).toLowerCase();
  }
  return array;
};
console.log(arrFirstLetter(arrOne));
console.log(arrFirstLetter(arrTwo));
console.log(arrFirstLetter(arrThree));
console.log("---------------");
// City Names.
// Create an array of city names.
// Loop through the array and add the city names to a string.
// Examples:
// [Berlin, Paris, Prague, Rome] ➞ expected output: “Berlin, Paris, Prague, Rome.”
/*
output is "Berlin, Paris, Prague, Rome, ." but output should be "Berlin, Paris, Prague, Rome."
I have to look again on this assignment!!!!!!
*/
let city = ["Berlin", "Paris", "Prague", "Rome"];
const arrToStr = (arr) => {
  let arr2Str = "";
  let comma = ", ";
  for (let i = 0; i < arr.length; i++) {
    arr2Str += arr[i] + comma;
  }
  return arr2Str + ".";
};
console.log(arrToStr(city));
console.log("---------------");
// Hello
// Create an array filled with your friends’ or family’s names.
// Loop over the array and greet each friend.
// Bonus:
// Print the indexes of each item in the array.
// Examples:
// [Maria, Mike, Paul, Doven] ➞ expected output: “Hello Maria! Hello Mike! Hello Paul! Hello Doven!”
// Bonus:
// [Susan, Rezvane, Mark] ➞ expected bonus output: “Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Mark is at index 2 of my friends and family array”.
let arrNames = ["Maria", "Mike", "Paul", "Doven", "Susan", "Rezvane", "Mark"];
const friendsAndFamily = (arr) => {
  result = "";
  for (let i = 0; i < arr.length; i++) {
    result += `Hello ${arr[i]}! ${arr[i]} is at index ${i} of my friends and family array,\n`;
  }
  return result;
};
console.log(friendsAndFamily(arrNames));
console.log("---------------");
// Odds and Evens.
// Create a program that changes a given array by adding 1 to each odd integer
// and subtracting 1 from each even integer.
// Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
let arrNumOne = [3, 5, 2, 4];
let arrNumTwo = [6, 9, 10, 20];
const evenOdd = (arr) => {
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arr[i] -= 1;
    } else {
      arr[i] += 1;
    }
  }
  return arr;
};
console.log(evenOdd(arrNumOne));
console.log(evenOdd(arrNumTwo));
