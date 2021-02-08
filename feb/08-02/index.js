// callbacks
function first(cb) {
  const funFunction = () => "Noooo";
  return cb;
}
function cb() {
  return "fun";
}

console.log(first(cb()));

// map
const names = ["Zain", "Olga", "Nancy", "Nancy2"];
//const heyNames = names.map((item, index) => `Hi ${item}, you live in ${index}`);
const heyNames = names.map((name) => `Hi ${name}`);

console.log(heyNames);
//console.log(names);
// reduce
const numArr = [2, 3, 4, 5, 6, 78, 8];
const reducer = (acc, cur) => acc + cur;
const totalArr = numArr.reduce(reducer, 0);
console.log(totalArr);
// filter
const filterArr = names.filter((item) => item.length == 7);
console.log(filterArr);

// find
const findVal = names.find((item) => item.length == 400);
console.log(findVal);

// fill
const numbers = [2, 4, 5, 67, 8, 8, 9, 5, 4];
//numbers.fill(3);
console.log(numbers);

// some
const isEven = (item) => item % 2 == 0;
console.log(numbers.some(isEven));

// every
const isBigger = (item) => item > 55;
console.log(numbers.every(isBigger));

// sort
const alpha = ["a", "c", "b", 2, "!", "ü"]; // UTF-16
console.log(alpha.sort());
const words = ["hi", "a", "web", "development"];
const sortedArr = words.sort((a, b) => b.length - a.length);
console.log(sortedArr);

console.log([11, 2, 1, 22].sort((a, b) => a - b));
// for in

// for of
