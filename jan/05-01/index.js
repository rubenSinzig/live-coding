console.log(x);
var x;
x = true;
//x= "";
//x = null;
//x = 199;
//x = undefined;
console.log(typeof x);
sum(3, 4);
sum(3900, 334);

function sum(x, y) {
  return x + y;
}
let bool = " ";
bool ? console.log("cool") : console.log("Not cool");

// bracket notation [0]
let str = "Hadi";
console.log(str[str.length - 1]);
// .trim()
let LongStr = "    Hi I am Hadi      ";
console.log(LongStr.trim());

function display(str) {
  console.log(str);
}
display("Zain");

// Numbers
let y = 3;
let w = 44;
// + - * /
console.log(y % w);
// (123) (23.4)
let int1 = "122";
let int2 = "1.5";
console.log(int1 + " " + int2);
// isNaN
isNaN(int1) ? console.log("Yeah it's not a number") : console.log("Nope sorry");
let intSum = int1 + int2;
console.log(intSum);
let newNum = parseInt(int1, 10);
console.log(newNum);
intSum = newNum + int2;
console.log(intSum);
let newFloat = parseFloat(int2);
console.log(newFloat);
