// old life with no Objects

let firstName = "zain";
let lastName = "xx";
let userAge = 33;

// Objects
// const <namespace> = { <key 1>: <value 1>, <key 2>: <value 2>, ... }
// keys, properties : value
// Object Literal
const obj = {
  name1: "Hadi",
  name2: "Olga",
  name3: "Zain",
};
const userObj = {
  name: "Nancy",
  lastName: "Sad",
  age: 33,
  add: "xxx str",
  act: ["draw", "sleep", "eat"],
  fat: true,
};
console.log(userObj.name);
console.log(typeof console);
console.log(userObj.act[1]);

// Accessing properties
// 1- with (bracket notation)
console.log(userObj["act"][2]);
// 2- with (dot notation)
console.log(userObj.act[1]);
const obj2 = {};
console.log(typeof obj2);

// Assignment using dot notation, more used to access a property value
obj2.name = "Hadi";
// Assigning using bracket notation, more used for an empty object
obj2["age"] = 31;

obj2.age = 33;

console.log(obj2);

const save = new Object();
console.log(save);
const arr = new Array();
console.log(arr);
// cool for 😎
for (let prop in userObj) {
  console.log(`${prop} : ${userObj[prop]}`);
}

// Tell me more about you
const person = {
  name: "Hadi",
  age: 31,
  birthYear: 1989,
  gender: "Male",
  hight: 176,
  print: function () {
    console.log(
      `I am ${this.name}, my age is ${this.age} I was born in ${this.birthYear}`
    );
  },
  old: function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  },
};

person.print();
console.log(person.old());
// Object.keys
let keysArr = Object.keys(person);
console.log(keysArr);

// Object.values
console.log(Object.values(person));

// Object.assign
const obj3 = { kids: 2, cars: 400 };
const obj4 = { colors: ["Red", "Gray", "Black"], pet: "fish" };
const totalObjects = Object.assign({ name: "Hadi" }, obj3, obj4);
console.log(totalObjects);
// Object.defineProperty()

const newPersonObject = {};
Object.defineProperty(newPersonObject, "bike", {
  value: 22,
  writable: false,
});
console.log(newPersonObject.bike);
newPersonObject.bike = 33;
console.log(newPersonObject.bike);
// Object.defineProperties()
Object.defineProperties(newPersonObject, {
  p1: {
    value: "cool",
    writable: true,
  },
  p2: {
    value: "nice",
    writable: false,
  },
  p3: {
    value: 102,
    writable: false,
  },
});
console.log(newPersonObject.p1);
// Object yourPersonObj. Create an object named person2. Loop through the object and print both the property and value of the object.

// delete

// Create a function that returns an array of properties of a javascript object.

// Create a function that returns an object has following output.
// ABC  -> { A: 1, B: 1, C: 1 }
