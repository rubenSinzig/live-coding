function display(str) {
  console.log(str);
}
// Functions declarations as values:
// const functionName = function(parameters){ ... }

const sum = function (x, y) {
  return x + y;
};
// const functionName = (parameters) =>{ ... }
const print = (str) => {
  console.log(str);
};
sum(3, 4);

// Invoke the function
function login() {
  // some things
  halloUser();

  // more steps
}

function halloUser() {
  // call other function
  return `Hej, welcome back`;
}

login();
// call stack

// Never do this one
// function one() {
//   two();
// }
// function two() {
//   one();
// }
// one();

// break;
// Breaking out of a loop:

// continue;
// Skipping an iteration:

// .map()

// .reduce()
