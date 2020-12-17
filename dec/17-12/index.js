// Exercise 17.12.2020

let number1 = 'something';
console.log(number1);

// how to output everything in one line? console.log(number1 [1] [5] );
console.log(number1[1]);
console.log(number1[5]);

let name1 = 'Super Mario was';
let age = 25;
let name2 = 'in';
let year = 2006;
console.log(name1, age, name2, year);

let isMarried = 1980 < 2020;

// the solution path is probably wrong --> let programmingLanguage = 'JavaScript is fun:';
let programmingLanguage = 'JavaScript is fun:';
let isFun = 10 == 10;
console.log(programmingLanguage, isFun);

// how to output everything in one line? console.log(programmingLanguage [0] [4] );
console.log(programmingLanguage[0]);
console.log(programmingLanguage[4]);

console.log(programmingLanguage.length);

let isStudent = 35;
isStudent <= 30 ? console.log('Ticket costs €5,00') : console.log('Ticket costs €12,00');

// is it possible to get a third output if my speed is exact 50km/h ?
let speedCheck = 49;
speedCheck >= 50 ? console.log('You´re going too fast!') : console.log('You´re driving below the speed limit, OMA');

// answers END

//Printing out a string
console.log("Hadi");
console.log("I love Berlin");
//Mathematical expressions: +, -, *, /, %
console.log(1 + 1);
console.log(1 * 4);
//Boolean expressions: comparison operators (===, !==, >=, <=, >, <)
console.log(12 == 2);
console.log(4);

// declaring variables
// let varName = varValue
// string value
var name = "Hadi";
// boolean value
let boo = 1 < 3;
console.log(boo);
// number value
let sum = 22 + 2;
console.log(sum);
console.log(name);
let bb = 44;
let add = "Berlin, 12334 💪";
console.log(add);
let x = 55;
console.log(x);
x = 3;
console.log(x);
let age;
console.log(age);
console.log(bb);
age = 31;
console.log(age, bb);
// typeof
console.log(typeof x);
console.log(typeof add);
console.log(typeof name);
console.log(typeof bb);
let y = 3.33333;
let z = 34.435;
let sumNum = y + z;
console.log(y + z);
let str1 = "Hi";
let str2 = " I am";
let strSum = str1 + str2;
console.log(str1 + str2);
console.log(typeof strSum);

let add2, age2, name2;
add2 = "something";
// Ternary operator
// ternary condition ? execute only if the condition was truthy : execute only if the condition was faulty
let person = 21;
console.log(person > 16);
person > 16 ? console.log("Go Party 😎 ") : console.log("Stay home 🤨");
let drive = 18;
drive >= 18
  ? console.log("Yeah let's drive now 💪🏻 ")
  : console.log("Nope sorry");
// comparison operators (===, !==, >=, <=, >, <)
console.log(1 == 1);
let num1 = 1;
let num2 = "1";
console.log(num1 === num2);
//
let userName = "Hadi";
console.log(typeof userName);
console.log(userName.length);
console.log(add2.length);
console.log(userName[2]);
let string = "Hi my Name is Hadi";
// "012345678"
// "h****@gmail.com"
let email = "hadi@gmail";
console.log(email[5]);
//"@had.com"
email[4] == "@"
  ? console.log("Enter a valid email add")
  : console.log("this is a nice start for an email add");

