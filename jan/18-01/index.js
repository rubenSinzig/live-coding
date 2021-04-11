// for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("-------");
for (let i = 0; i <= 5; ) {
  console.log(i);
  i++;
}
console.log("-------");
for (let i = 0; i < 5; i++) {
  if (i <= 1) {
    console.log(`there is ${i} star in the sky`);
  } else {
    console.log(`there are ${i} stars in the sky`);
  }
}

for (let i = 5; i > 0; i--) {
  console.log(`i is now ${i}`);
}

for (let i = 1; i <= 10; i++) {
  console.log(`4 * ${i} = ${i * 4}`);
}

for (let i = 1; i <= 10; i++) {
  console.log(`this is Multi table for ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j}  = ${i * j}`);
  }
  console.log("-------");
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
  }
}
// other way to do so
for (let i = 0; i <= 10; ) {
  console.log(`${i} is even`);
  i += 2;
}

// for (let i = 0; i <= 10; i++) {
//   console.log(i % 2 == 0 ? `${i} is even` : "");
// }
/* 
 +
 ++
 +++
 ++++
 ++++
 +++
 ++
 +

 1
 12
 123
 1234

*/
let drawShape = "";
for (let i = 0; i <= 4; i++) {
  drawShape = "";
  for (let j = 0; j <= i; j++) {
    // +++
    drawShape += "+";
  }
  console.log(drawShape);
  //
}

//console.log(`  333 \n 34444 `);
const names = ["Zain", "Olga", "Nancy"];
const workOrHa = ["WebDev", "Sleep", "Eat"];
for (let i = 0; i < names.length; i++) {
  console.log(`hi I am ${names[i]}, I will be ${workOrHa[i]} `);
}

const images = ["😎", "🤓", "🙄"];
const likes = [22, 344, 666];
for (let i = 0; i < images.length; i++) {
  console.log(`
   ____________
  | this img ${images[i]}
  |   got ${likes[i]}
  l____________
  `);
}

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

// Store Mark's and John's mass and height in variables.
const markH = 1.65;
const markM = 85;
const johnH = 1.9;
const johnM = 120;
// Calculate both their BMIs and store their BMIs in variables.
let markBMI = markM / (markH * markH);
let johnBMI = johnM / (johnH * johnH);
// console.log(markBMI);
// Create a boolean variable containing information about whether Mark has a higher BMI than John.
let bool = markBMI > johnBMI;
console.log(typeof bool);
// Print a string to the console containing the variable from step 3 using string interpolation. (e.g. " [boolean], it is").
console.log(`Is Mark's BMI higher than John's? Why yes, it's ${bool}`);
// Create an if statement which prints the name and BMI of the person with the highest BMI.

if (markBMI > johnBMI) {
  console.log("Mark is the winner");
} else {
  console.log("John is the winner");
}

// Make a variable for firstName and age and give each variable values.
// Create an if/else statement to check whether the person’s age is less than 13.
// If so, print “firstName is a child”.
// If the age is equal to or more than 13 and less than 20,
// print “firstName is a teenager”.
// If the person’s age is equal to and more than 20 and less than 30,
// then print “firstName is a young adult”.
// If none of these conditions apply, print “firstName is a adult”.

const lifeStatus = (firstName, age) => {
  let status = "";
  if (age < 13) {
    status = "child";
  } else if (age >= 13 && age < 20) {
    status = "teenager";
  } else if (age >= 20 && age < 30) {
    status = " young adult";
  } else {
    status = "adult";
  }
  return `${firstName} is a ${status}`;
};
let firstName = "Hadi";
let age = 31;

console.log(lifeStatus(firstName, age));
console.log(lifeStatus("Zain", 12));

let color = "red";
switch (color) {
  case "pink":
    isLoged = false;

    // more code
    console.log("cool this is pink");
    break;
  case "red":
    console.log("cool this is red");
    break;
  case "white":
    console.log("cool this is white");
    break;
  default:
    console.log("sorry you need to enter a color");
}
// more
let userKidsNumber = 12;

switch (userKidsNumber) {
  case 1:
    console.log("You are new parent with 1 child");
    break;
  case 1:
    console.log("You are new parent with 1 child");
    break;
  case 2:
    console.log("You have 2 kids nice ");
    break;
  case 3:
    console.log("You have 3 kids nice ");
    break;
  case 4:
  case 5:
  case 6:
    console.log("You have many kids nice ");
    break;
  default:
    console.log("Cool you are happy parent :) ");
}

// Capitalize. Create a program that capitalizes the first letter of each element in an array of names. Examples:
// ["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]

// ["samuel", "MARIA", "lUkE", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]

// ["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

const capitalize = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1).toLowerCase();
  }
  return arr;
};

console.log(capitalize(["samuel", "MARIA", "lUkE", "mary"]));
console.log(capitalize(["zIan", "hADI", "naCY", "mary"]));
// City Names.
// Create an array of city names. Loop through the array and add the city names to a string. Examples:
// [Berlin, Paris, Prague, Rome] ➞ expected output: “Berlin, Paris, Prague, Rome.”.

const arrayToStr = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    if (i == arr.length - 1) {
      str += ".";
    } else {
      str += ", ";
    }
  }
  return str;
};
console.log(arrayToStr(["Berlin", "Paris", "Prague", "Rome"]));
// Hello
//  Create an array filled with your friends’ or family’s names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array. Examples:
// [Maria, Mike, Paul, Doven] ➞ expected output: “Hello Maria! Hello Mike! Hello Paul! Hello Doven!”
// Bonus [Susan, Rezvane, Mark] ➞ expected bonus output: “Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Mark is at index 2 of my friends and family array”.

const hallo = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Hallo ${arr[i]} ,I am the index of ${i} `);
  }
};
hallo(["Susan", "Rezvane", "Mark"]);
// Odds and Evens.
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

// DRY
const oddOrEven = (arr) => {
  let currentValue;
  for (let i = 0; i < arr.length; i++) {
    currentValue = arr[i];
    if (currentValue % 2) {
      console.log(currentValue - 1);
    } else {
      console.log(currentValue + 1);
    }
  }
};
oddOrEven([3, 5, 2, 4]);
