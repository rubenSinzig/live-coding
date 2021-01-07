// printing out using log method
console.log("Hadi ");
// var
let x = 3;
let str = "Berlin";
let old = true;
// ternary condition ? ex if true : ex if false
let kid = 18;
kid > 16
  ? console.log("Yay I can Drive")
  : console.log("No My Mom will drive me");
// $ nodemon index.js
// $ node index.js
let firstNa = "Hadi";
console.log(firstNa.length);
console.log(firstNa[0]);
let something = 1231;
something = 4567;
console.log(something);
const fatherName = "Wii";
console.log(fatherName);
// global var
var global = "Hi I am global"; // hoisted
// scope
{
  let local = 22;
  global = "Hi";
  var localGlob = "Hi It's me";
}
console.log(localGlob);
print("Hadi");

// function declaration
// hoisted
function print(xxx) {
  console.log(xxx);
}
// function call
print("Hadi");
print(22);
console.log(lastName);
var lastName = "Nsreeny"; // hoisted
console.log(lastName);
function sum(x, y) {
  let z = 0;
  z = x + y;
  return z;
}

console.log(sum(2, 3));
let sumRe = sum(2, 44);
console.log(sumRe);

// ----- option 1
console.log(5);
// ----- option 2
let num = 5;
console.log(num);
// ----- option 3
const a = 2;
const b = 3;
console.log(a + b);
// ----- option 4
console.log(3 - 2 - 4 + 2 + 6);

// substring
let originalString = "Hi My Name is Hadi, I'm 31 y.";
print(originalString.length);
let str1 = originalString.substring(5);
console.log(str1);
let str2 = originalString.substring(6, 10);
console.log(str2);
// toUpperCase
let str3 = originalString.toUpperCase();
console.log(str3);
// toLowerCase
let str4 = originalString.toLowerCase();
console.log(str4);
let firstName = "hAdI";
// Hadi
let firstChr = firstName[0].toUpperCase();
console.log(firstChr);
let restChr = firstName.substring(1).toLowerCase();
console.log(restChr);
let FinalFirstName = firstChr + restChr;
console.log(FinalFirstName);

let shortForm =
  firstName[0].toUpperCase() + firstName.substring(1).toLowerCase();
console.log(shortForm);

// shortForm = H + adi
// comment one line

/* 

THis is many lines
comment

*/

// camelCase vs snake_case
let longStr = "Hi this is me Hi, I am Hadi, I live in Berlin";

// includes
let text = longStr.includes("Is");
let text2 = longStr.includes("@");
console.log(text);
console.log(text2);

//subString
let partOfStr = longStr.substring(4, 7);
console.log(partOfStr);

// 1. Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.
let strExOne = "I can walk in the park all day!";
let shortStrOne = strExOne.substring(18, 22);
console.log(shortStrOne);

//  2. Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console.
let strExTwo = "Hello World";
console.log(strExTwo.toUpperCase());

//  3. Declare another variable with the value of “Earthlings”. Convert the value to lower case and print the converted value to the console.
let strExThree = "Earthlings";
console.log(strExThree.toLowerCase());

//  4. Declare a variable with the value “JavaScript”. Print the the characters “aSc” to the console using the substring() method.
let Js = "JavaScript";
console.log(Js.substring(3, 6));

//  5. Check if the sentence “nice shoes” contains the letter l.
let strExFive = "nice shoes";
let lIsThere = strExFive.includes("l");
console.log(lIsThere);

//  6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ.
let strExSix = "JavaScript";
let strExSix_1 = "JJavaScriptJ";

//let ModStr = "J" + strExSix + "J";
console.log("J" + strExSix + "J");

//let ModStr = strExSix[0] + strExSix + strExSix[0];
let firstStrExSix = strExSix[0];
console.log(firstStrExSix + strExSix + firstStrExSix);

// .length - num
let longText = "This is a long text";
let subStr = longText.substring(longText.length - 4);
console.log(subStr);

// slice
let sliceStr = longText.slice(5);
console.log(sliceStr);

// ` `
let firstUserName = "Zain";
let lastUserName = "Lastname";
let add = "Straße, 12345 Leverkusen";

// console.log("Hi I am "+firstUserName + " I live in "+add + ". My last name "+lastUserName +".");

console.log(`Hi I am ${firstUserName}, I live in ${add}. My last name is ${lastUserName}.`);

let lastUserName = "something";
let add = "xxx str, 1234 Berlin";
// console.log(
//   "Hi I am" +
//     firstUserName +
//     ",I live in " +
//     add +
//     ". My last" + " " + "name " +
//     lastUserName +
//     "."
// );
console.log(
  `Hi I am ${firstUserName}, I live in ${add}. My last name is ${lastUserName}.`
);

var globalVar = "This is global";
console.log(globalVar);
globalVar = "This is global plus";

function sub(x, y){
  return x - y;
}
console.log(sub(10, 4));
function sub(x, y) {
  let local = "This is local";
  console.log(local);
  console.log(globalVar);
  globalVar = "This is global plus ++";
  return x - y;
}
console.log(sub(10, 4));

// ++ += -- -=
let num1 = 1;

//num1 = num1 + 1; == num1 += 1;
num1 += 333;
console.log(num1);
let num2 = 2;

//num2 = num2 - 1; == num2 -= 1;
num2 -= 1;
console.log(num2);

// Increment
let w = 10;
w++;
++w;
console.log(w);

// decrement
let q = 10;
q--;
--q;
console.log(q);

// 7. Create a new string from a given string, taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt
let lastThree = Js.substring(Js.length - 3);
let newJsStr = lastThree + Js + lastThree;
console.log(newJsStr);

// 8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes “Java”.
let newStr = "I will go to Java";
let upperNewStr = newStr.toUpperCase();
console.log(upperNewStr);
console.log(upperNewStr.includes("Java"));

// something for fun :)
upperNewStr.includes("Java") ? console.log("Nice") : console.log("Oh noo");

console.log(11 == 12 ? "cool" : "Not cool");

// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
let modJsStr = Js.substring(1) + Js[0];
console.log(modJsStr);
let firstJsChr = Js[0];

// JavaScript
let lastJsChr = Js[Js.length - 1];
let midJsStr = Js.substring(1, Js.length - 1);
let newLongJsStr = lastJsChr + midJsStr + firstJsChr;
console.log(newLongJsStr);

// 10. Create 3 different variables about yourself using strings as values e.g. let firstName = “Maria”. Print the sentence to the console using string interpolation e.g. “My name is Maria. I live in Berlin and I am a teacher”.
let myName = "Nancy";
let myAdd = "Berlin";
let myJob = "Teacher";
let aboutMeStr = `My name is ${myName}. I live in ${myAdd}, and I am a ${myJob}.`;
console.log(aboutMeStr);

//11. Declare a variable and assign the value “the quick brown fox” (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let foxStr = "the quick brown fox";
let foxUpper = foxStr[0].toUpperCase() + foxStr.substring(1);
console.log(foxUpper);
