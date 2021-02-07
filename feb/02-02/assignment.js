console.log("---------------------------");
// Object yourPersonObj.
// Create an object named person2.
// Loop through the object and print both the property and value of the object.
const myPerson = () => {
  let result = "";
  const person2 = {
    firstName: "Paul",
    lastName: "Smith",
    age: 45,
    gender: "Male",
  };
  for (const prop in person2) {
    result += `${prop}: ${person2[prop]}\n`;
  }
  return result.trim();
};
console.log(myPerson());
console.log("----------");
// Create a function that returns an array of the properties of a javascript object.
// Given the following object
const student2 = {
  firstName: "Zain",
  lastName: "Oil",
  class: 48,
};

const arr = () => {
  let result = [];
  for (const prop in student2) {
    result.push(prop);
  }
  return result;
};
console.log(arr());
console.log("----------");
// Create a method that prints the following:
// "Zain Oil a student in class 48"
const student = {
  firstName: "Zain",
  lastName: "Oil",
  class: 48,
  print: function () {
    console.log(
      `${this.firstName} ${this.lastName} a student in class ${this.class}`
    );
  },
};
student.print();
console.log("---------------------------");
// Get Values.
// Create a function that returns an array of all values of an object’s properties.
//
// Examples:
//
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
//
// Expected output:
// ["tea", "coffee", "milk"]
const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};
const valueToArr = () => {
  let result = [];
  for (const prop in getObjectValues) {
    result.push(getObjectValues[prop]);
  }
  return result;
};
console.log(valueToArr());
console.log("---------------------------");
// List Properties. Create a function that returns an array of properties of a javascript object.
// Example
//
// let student = {
//   name: "Mike",
//   class: "4A"
//   course: "English"
// }
//
// Expected output:
// ["name", "class", "course"]
let student3 = {
  name: "Mike",
  class: "4A",
  course: "English",
};
const propToArr = () => {
  let result = [];
  for (const prop in student3) {
    result.push(prop);
  }
  return result;
};
console.log(propToArr());
console.log("---------------------------");
