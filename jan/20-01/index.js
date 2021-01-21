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

const findVowels2 = (str) => {
  let currentValue;
  let counter = 0;
  let toLowStr = str.toLowerCase();
  for (let i = 0; i < toLowStr.length; i++) {
    currentValue = toLowStr[i];
    if (
      currentValue == "i" ||
      currentValue == "a" ||
      currentValue == "e" ||
      currentValue == "o" ||
      currentValue == "u"
    ) {
      counter++;
    }
  }
  return counter;
};

const findVowels3 = (str) => {
  let counter = 0;
  let strToArr = str.toLowerCase().split("");
  for (let i = 0; i < strToArr.length; i++) {
    switch (strToArr[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        counter++;
        break;
    }
  }
  return `You had ${counter} Vowels`;
};
console.log(findVowels3("Hi this is cool"));
// No Duplicates!
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

function cleanUp(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(cleanUp([5, 5, 15, 20, 25, 5, 5, 15]));

function cleanUp2(arr) {
  //  for (i = 0; i < arr.length; i++) {
  //     // if (arr[i] === arr[i + 1]) {
  //     //   // still fixing the problem, will update soon
  //     // }
  //
}
console.log(cleanUp2([5, 5, 15, 20, 25, 5, 5, 15]));

// SumOfNumbers.

// Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.

const sumOfNumbers = (arr) => {
  let sum = 0;
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
  }
  return `The sum of that arr is ${sum}, the product also is ${product}`;
};

console.log(sumOfNumbers([3, 4, 4, 6]));
// Add Up.

// Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples:

// sumIntFrom1ToN(4) ➞ 10 sumIntFrom1ToN(13) ➞ 91 sumIntFrom1ToN(600) ➞ 180300

const sumIntFrom1ToN = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumIntFrom1ToN(7));
// String Check.

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

// Examples:

// isStrStartOfWord("bu", "button") ➞ true isStrStartOfWord("tri", "triplet") ➞ true isStrStartOfWord("beau", "pastry") ➞ false

const isStrStartOfWord = (str, word) => {
  let lowStr = str.toLowerCase();
  let lowWord = word.toLowerCase();
  return lowWord.substring(0, lowStr.length) == lowStr;
};
console.log(isStrStartOfWord("bu", "button"));
console.log(isStrStartOfWord("bu", "ttobun"));
// Pie.

// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// Total number of slices.
// Number of recipients.
// How many slices each person gets. Examples:
// isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices

// isEqualSlices(8, 3, 2) ➞ true

// isEqualSlices(8, 3, 3) ➞ false

// isEqualSlices(24, 12, 2) ➞ true

const isEqualSlices = (totalSlices, numOfRecipients, slicePerPerson) => {
  let neededSlices = numOfRecipients * slicePerPerson;
  return `your had ${totalSlices >= neededSlices} so good luck with that `;
};

console.log(isEqualSlices(24, 12, 2));
console.log(isEqualSlices(8, 3, 3));
// isPalindrome.

// Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

const isPalindrome = (str) => {
  let wordToArr = str.toLowerCase().split("");
  return str === wordToArr.reverse().join("");
};

console.log(isPalindrome("tarrattarrat"));
