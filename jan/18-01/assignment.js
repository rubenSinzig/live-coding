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
  console.log(`Is Mark’s BMI higher than John’s? Yes it’s ${bool}.`);
  if (markBMI > johnBMI) {
    console.log(`Mark has an BMI of ${Math.round(markBMI)}.`);
  }
  if (johnBMI > markBMI) {
    console.log(`John has an BMI of ${Math.round(johnBMI)}.`);
  }
  // return result;
};
bmi();
// More conditions
// Make a variable for firstName and age and give each variable values.
// Create an if/else statement to check whether the person’s age is less than 13.
// If so, print “firstName is a child”.
// If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”.
// If the person’s age is equal to and more than 20 and less than 30,
// then print “firstName is a young adult”.
// If none of these conditions apply, print “firstName is a adult”.
