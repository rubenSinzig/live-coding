// printing out
console.log("Ruben ");
// var
let x = 3;
let str = "Leverkusen";
let old = true;
// ternary op
let kid = 18;
kid > 16 ? console.log("Yes I can Drive") 
: console.log("No I can not Drive");
// typeof
console.log(typeof x);
console.log(typeof old);
console.log(typeof str);
// length

/* let firstName = "Ruben";
console.log(firstName.length);
console.log(firstName[0]);
*/
let something = 1231;
something = 4567;
console.log(something);
const fatherName = "Paul";
console.log(fatherName);
var global = "Hi I am golbal";
{
    let local = 22;
    global = "Jens";
    var localGlobal = "Hi It's me";
}
console.log(global);
console.log(localGlobal);
// function
function print(str){
    console.log(str);
}
print("Ben");
print(22);

let oString = "Hi My Name is Ruben, I'm 31 y.";
print(oString.length);
let str1 = oString.substring(5);
console.log(str1);

let firstName = "rUbEn";
console.log(firstName);

let shortForm = firstName[0].toUpperCase() + firstName.substring(1).toLowerCase();
console.log(shortForm);

// shortForm = R + uben

// camelCase vs snake_case

// includes
let longStr = "Hi this is me, I am Ruben, I live in Leverkusen.";
let text = longStr.includes("Hi");
let text2 = longStr.includes("@");
console.log(text);
console.log(text2);

// 
let partOfStr  = longStr.substring(4, 9);
console.log(partOfStr);
