// Scrabble.
// Write a program that, given an array of scrabble tiles,
// counts the maximum score that a player can earn from the tiles in their hand.
// Example:
//  [ { tile: “N”, score: 1 },
//    { tile: “K”, score: 5 },
//    { tile: “Z”, score: 10 },
//    { tile: “X”, score: 8 },
//    { tile: “D”, score: 2 },
//    { tile: “A”, score: 1 },
//    { tile: “E”, score: 1 } ]
const countScore = (arr) => {
  let result = arr.reduce((acc, cur) => (acc += cur.score), 0);
  return result;
};
console.log(
  countScore([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ])
);
// 4. Switch Keys and Values.
// Create a function to get a copy of an object.
// The copy must switch the keys and values.
// Example:
// let person = {
//   name: “John”,
//   job: “teacher”
// }
// Expected Output:
// {“John”: name, “teacher”: job}
let person = {
  name: "John",
  job: "teacher",
};
const switchKeyValue = () => {
  let copyPerson = { ...person };
  // NOT FINISH !!!
};
console.log(switchKeyValue());
// 5. Return Keys and Values.
// Write a program that takes an object and returns an array which
// contains two arrays:
// one for the keys of the object and the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [[“a”, “b”, “c”], [1, 2, 3]]
// {key: true} ➞ [[“key”], [true]]
const keysAndValues = (obj) => {
  let keysArr = Object.keys(obj);
  let valuesArr = Object.values(obj);
  let result = [keysArr, valuesArr];
  return result;
};
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ key: true }));
