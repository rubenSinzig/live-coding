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
let userKidsNumber = 5;
switch (userKidsNumber) {
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
