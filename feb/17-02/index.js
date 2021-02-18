// 3 types of errors
// (compilation aka compiler fails to compile, runtime, logic)
// try catch will find the runtime errors but not the parse errors like typo or syntax problems

// most of the error are coming from other places like working with data base or server internal issues
// `try { ... } catch (e) { ... }`

// try --> to test a block of code
// catch --> to handel the error
// throw --> to create a custom error message
// finally --> to execute a code after try regardless of the result

let userAge = 25;
if (userAge == 24) {
  console.log("Cool you are the best");
}

let userName = "";
try {
  let userAdd = "Berlin";
  //cool();
  //if (userName == "") throw "Sorry, I need userName";
  //if (userAge < 55) throw "Sorry, you are not kid anymore";
  console.log("I am try");
} catch (err) {
  console.log("There was an error :" + err);
} finally {
  console.log("I will run anyway ");
}
console.log("Hi");

function printData() {
  console.log("I am wining");
}

//const timerDisplay = setTimeout(printData, 3000);
//const timerDisplay = setTimeout(() => console.log("I am wining"), 3000);

// We will learn after HTML & CSS && SASS
//
// callbacks
// Promise
// async/await
// RxJs
// and a lot more 😎
const wordConverter = (orgArr) => {
  return orgArr.join("er ").split(" ");
};
console.log(wordConverter(["smart", "kind", "sweet", "small", "clear"]));

class Course {
  constructor(_teacherName = "zain", _specialite, _numberOfStud) {
    this.teacherName = _teacherName;
    this.specialite = "web development";
    this.numberOfStude = 21;
  }
  spaceNeeded() {
    console.log(`The classroom should be ${this.numberOfStude * 2}m².`);
  }
  details() {
    console.log(
      `This is a ${this.specialite}course taught by ${this.teacherName}.There are ${this.numberOfStude} students taking the course.`
    );
  }
}
let course = new Course("zain", "web", 21);
course.spaceNeeded();
course.details();

function createGrid(times, sign) {
  let result = [];
  for (let i = 0; i < times * times; i++) {
    result.push(sign);
  }
  return result;
}
console.log(createGrid(3, "*"));

const myArr = ["coffee", "tea", "juice"];

function createMatrix(num, str) {
  return Array(num)
    .fill()
    .map(() => Array(num).fill(str));
}
console.log(createMatrix(9, "*"));

function validPin(pin) {
  let pinCopy = pin;
  let sum = 0;
  while (pinCopy) {
    sum += pinCopy % 10;
    pinCopy = Math.floor(pinCopy / 10);
  }
  let lastDigit = pin.toString().slice(-1);
  if (/^(?!(.)\1{3})\d{4}$/gm.test(pin) && sum >= 5 && lastDigit % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(validPin(1111)); // TRUE

myObj = {
  1: 10,
  2: 20,
  3: 30,
};

const convertObjectToArray = (obj) => {
  return Object.keys(obj).map((key) => [Number(key), obj[key]]);
};

console.log(convertObjectToArray(myObj));

const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 },
];

const calculateHours = (arr) => {
  return arr.reduce((acc, cur) => acc + (cur.end - cur.start), 0);
};
console.log(calculateHours(hourTracking));
pin = "1234";
let obj = {};
for (let i = 0; i < pin.length; i++) {
  obj[pin[i]] = true;
}
console.log(obj);
str = "1223";
console.log(str[str.length - 1]);
const wordConverter2 = (arr, i) => {
  let result = [];
  if (i >= arr.length) {
    return "";
  } else {
    let newArr = arr[i] + "er ";
    result.push(newArr);
    return result + wordConverter(arr, i + 1);
  }
};
console.log(wordConverter2(["smart", "kind", "sweet", "small", "clear"], 0));
