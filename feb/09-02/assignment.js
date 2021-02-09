//
// Convert keys and values into an array.
//
// Create a function that converts an object into an array of keys and values.
// Examples:
//
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// })
// Expected output:
// [["A", 1], ["B", 2], ["C", 3]]
// objectToArray({
//   cats: 1,
//   dogs: 2,
//   turtles: 4
// })
// Expected output:
// [["cats", 1], ["dogs", 2], ["turtles", 4]]
//

const objectToArray = (obj) => {
  return Object.entries(obj);
};
console.log(
  objectToArray({
    A: 1,
    B: 2,
    C: 3,
  })
);
console.log(
  objectToArray({
    cats: 1,
    dogs: 2,
    turtles: 4,
  })
);
// List Properties.
//
// Create a function that returns an array of properties of a javascript object.
//
// Example
// let student = {
//   name: "Mike",
//   class: "4A",
//   course: "English"
// }
// Expected output:
// ["name", "class", "course"]
let student = {
  name: "Mike",
  class: "4A",
  course: "English",
  print: function () {
    return Object.keys(student).slice(0, 3);
  },
};
console.log(student.print());
// Merge.
//
// Create a function that takes two objects as its parameters and merges them together into a new object.
//
// Example
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}
(function mergeObj(
  frist = { firstName: "undefined" },
  last = { lastName: "undefined" }
) {
  console.log(Object.assign(frist, last));
})({ firstName: "John" }, { lastName: "Smith" });
