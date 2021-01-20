const arr1 = []; // 1st way
arr1.push("Hi");
console.log(arr1);
const arr2 = ["Good", "Day"];

// new Array
const arr3 = new Array();
arr3.push("cool");
console.log(arr3);
//.of()
let newArr = Array.of(1, 44, 55, 6);
console.log(newArr);
// .sort()
// to sort the elements in an array
// will use the UTF-16 code
let alpha = ["c", "b", "a", "A", "1", "$"];
let newSortedAlpha = alpha.sort();
console.log(newSortedAlpha);
// .reverse()
// to reverse an array aka first is last and last is first
let crazyArr = [3, 55, 2];
let crazyArrRe = crazyArr.reverse();
console.log(crazyArrRe);
let newCrazy = ["A", "B", "c", "D"];
console.log(newCrazy.reverse());
console.log(typeof newCrazy);
// .isArray()
// true or false
let bool = Array.isArray([]);
console.log(bool);
// .lastIndexOf()
// will start searching backwards
// -1 means nothing been found
let arr4 = ["Hi", "I", "you", "you", "i"];
console.log(arr4.lastIndexOf("Hadi"));
console.log(arr4.lastIndexOf("you")); // 3
console.log(arr4.indexOf("you")); // 2

// .fill()
// (what,from,to) => (0,2,3)
let arr5 = [22, 34, 6, 7, 4, 4, 3];
// let newArr5 = arr5.fill(101, 1,4);
let newArr5 = arr5.fill(101, 3);
console.log(newArr5);
console.log(arr5);
// do
let counter = 1000;
do {
  console.log(`counter is now at ${counter}`);
  //arr5.push("Hi");
  counter++;
} while (counter <= 10 && userLog);

// while
let loopOne = 0;
while (loopOne < 5) {
  loopOne++;
  console.log(loopOne);
}
//console.log(loopOne);
// for(let i =0;i<10;){
//     //do things
//     i++
// }
//console.log(loopOne);

// AEIOU:
// Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
// i.e. findVowels(“this is a string”) ➞ 4

const findVowels = (str) => {
  let counter = 0;
  let vowelArr = ["a", "e", "o", "i", "u"];
  let newStr = str.toLowerCase();
  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < vowelArr.length; j++) {
      if (newStr[i].includes(vowelArr[j])) {
        counter++;
      }
    }
  }
  return counter;
};
console.log(findVowels("Hi this is nice party, will be"));

// No Duplicates!
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

const cleanUp = (arr) => {
  let result = []; // 5 , 10
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      // 10
      result.push(arr[i]);
    }
  }

  return result;
};
console.log(cleanUp([5, 10, 5, 10, 25]));

const sumOfNumbers = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    console.log(result);
  }

  return result;
};
console.log(sumOfNumbers([1, 3, 5]));
