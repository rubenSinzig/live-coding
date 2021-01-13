const names = ["T", "Hi"];
console.log(names[1][0]);

function sum(x, y) {
  return x * y;
}

sum(2, 4);
const print = (name) => {
  let newStr = `Hi my name is ${name}`;
  return newStr;
};
console.log(print("Zain"));

const functionName = () => {
  return " you are cool";
};
functionName();

for (let i = 0; i < 100; ) {
  console.log("TTTTT");
  console.log("Hi this is cool");
  i += 2;
}
console.log("Something");

let userData = "";
const saveData = (userName) => {
  userData = userName;
};
saveData("Hadi");
