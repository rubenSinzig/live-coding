let x, y, z;
console.log(x);
x = 4;
y = 5;
z = x + y;
console.log(Math.max(3, 5, 2, x, y, 100));
console.log(Math.min(x, y, z));
let str = "20.4";
let strIntoNum = parseInt(str, 10); // always use pls
// 0,1,2,3,4,5,6,7,8,9 ->10
// 0,1 ->2
// 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F ->16
console.log("parseInt", strIntoNum);
let strIntoNum1 = +str; // never use
console.log("+str", strIntoNum1);
let strIntoNum2 = str * 1; // we don't use
console.log(" * 1= ", strIntoNum2);
let strIntFloat = parseFloat(str);
console.log("parseFloat", strIntFloat);
console.log(((x + y) / (z + 2.44)) * 29 + x);
//
// Number + String
let d, f, r;
d = "H";
f = 33;
console.log(d + f);
// Number + Boolean
r = true; // true = 1,  false =  0
console.log(f + r); // 33 + 1 = 34
// string + string
let str1 = "Hi";
let str2 = " I am Hadi";
console.log(str1 + str2);
//  ++ --
let a = 3;
console.log(a++);
console.log(a);
// --
let q = 3;
console.log(q--);
console.log(q);
//console.log(a);
// typeof
console.log(typeof str1);
console.log(typeof x);
console.log(typeof console.log);
console.log(typeof Math.ceil);
// 3.444444444444
// (0.1*0.2)
let floatNum1 = 0.1;
let floatNum2 = 0.2;
let result = floatNum1 * floatNum2;
console.log(result);
// toFixed()
let num = 4;
console.log(result.toFixed(num));

// 1
console.log(Math.min(-1, 0, 1, 2, 3, 4));
//2
console.log(Math.max(-1, 0, 1, 2, 3, 4));

// 3
// Round up
function roundUp(num) {
  let result = Math.ceil(num);
  console.log(result);
}
roundUp(3321.32321);
roundUp(326.76);
roundUp(43.342);
// 4
// Round down
function roundDown(num) {
  let result = Math.floor(num);
  console.log(result);
}
roundDown(3321.32321);
roundDown(326.76);
roundDown(43.342);
// concatenation
// 1
let introSent = "Hi, my name is Nancy";
let age = 25;
console.log(introSent + " " + age);
console.log(`${introSent} ${age}`);
// The `+` operator is concatenating the string and the number.

// 2
let integer = "1005";
console.log(parseInt(integer));
let float = "10.05";
console.log(parseFloat(float));

// Math.random()
// 0 - 100 -> 0 - 99
//
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.random());
// ==
// 1 == 1 -> true
// 1 != 44 -> true

console.log(1 == 1);
console.log(1 != 2);
console.log(1 == 1 && 1 == 10);
// and &&
// true && false => false
// false && true => false
// false && false => false
// true && true => true
//  or ||
// true || false => true
// false || true => true
// false || false => false
// true || true => true
console.log(1 == 20 || (1 == 1 && 1 != 292)); // false || true && true

let bool1, bool2, boo3;
bool1 = true;
bool2 = false;
console.log(bool1 && bool2 ? "cool" : "not cool");
console.log(bool1 || bool2 ? "cool" : "not cool");
// === ==
let numInStr = "10";
let numb = 10;
console.log(numInStr == numb ? "cool" : "not cool"); //
console.log(numInStr === numb ? "cool" : "not cool"); //
// 1 = true
// 0 = false
// ""= false
// " " , "H" = true
// true = true
// false = false
console.log(3.14 ? "yeah it's true" : "Nooooo");
// Create a program that prints a random integer from 1 - 6.
console.log(Math.floor(Math.random() * 6) + 1);
