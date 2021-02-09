//Name of City

function nameOfCity(cityName) {
  const firstThreeChr = cityName.substring(0, 3).toLowerCase();
  if (firstThreeChr == "new" || firstThreeChr == "los") {
    return cityName;
  } else {
    return `the city name it's not `;
  }
}
console.log(nameOfCity("Valletta"));
// Is Divisible
const isDivisible = (num) => num % 100 == 0;
console.log(isDivisible(1000));
// Ternary Operator
const isRaining = (bool) =>
  bool
    ? "wet day - you need an umbrella!"
    : "dry day - leave your umbrella at home!";

console.log(isRaining(true));
// Loop Sequence

const geometricalSequence = () => {
  let str = "";
  for (let i = 1; i <= 256; ) {
    // if (i == 1) {
    //   str += i;
    //   i += i;
    //   continue;
    // }
    str += `${i} `;
    i += i;
    // i+= i -> i + i
  }
  return str.trim();
};
console.log(geometricalSequence());
// Multiples of Three
function multiplesOfThree() {
  let str = "";
  for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0) {
      str += `${i} `;
    }
  }
  return str.trim();
}

console.log(multiplesOfThree());

// powerOf
function powerOf(integer) {
  return Math.pow(integer, integer);
  // return integer ** integer
}

console.log(powerOf(5));

// Problem Solving: Number of vowels
function vowelCount(string) {
  const vo = "aeiou";
  const str = string.toLowerCase();
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vo.length; j++) {
      if (str[i] == vo[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(vowelCount("test"));

// Objects
const obj1 = {};
obj1["name"] = "Olga";
console.log(obj1);
const obj2 = {
  userName: "Hadi",
};
console.log(obj2);
const obj3 = new Object();
const person = {
  userName: "Zain",
  age: 22,
  add: "Berlin",
};
const arr = Object.entries(person);
console.log(arr);
// [[],[],[],[]]
const arrOfArr = [
  [33, 2],
  [22, 3],
  [44, 11],
  [51, 55],
];

console.log(arrOfArr[2][1]);
//

const objects = [
  { name: "Nancy", lasName: "Zo" },
  {
    name: "Olga",
    lastName: "do",
    printOut: function () {
      console.log("Hi");
    },
  },
];

//objects[1].printOut();
// other way to acc
objects[1]["printOut"]();

// Clones vs. References

// Primitive  (Simple values are always clones)
// String, Number, Boolean
let x = 3;
let z = x; // clone coz it's simple
console.log(z);
z = 55;
console.log(x);
let strLong = "Hi, I am here";
let cloneStr = strLong; // clone coz it's simple
cloneStr = "Noooooooooo";
console.log(strLong);

// Object
const car = {
  name: "Ford",
  year: "2020",
  color: "Red",
};
// Objects are references by default: Array and object literals

const newCar = car; // ref

newCar.name = "BMW";
console.log(car);
const names = ["Olga", "Zain", "Jack", "Nancy"];
//  1
const namesClone = [...names];
namesClone[0] = "Hadi";
console.log(names);

// 2
const newCloneArr = [].concat(names);
console.log(newCloneArr);
// 3
const lastWay = names.slice(0);
lastWay[0] = "cool";
console.log(lastWay);
