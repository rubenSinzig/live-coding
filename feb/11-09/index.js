// Destructuring objects as function parameters
function fun(num, { name = "new" }) {
  console.log(num);
  let firstName = { name };
  console.log(firstName);
}

fun(2, { age: 22 });

const userData = {
  firstName: "Steel",
  lastName: "soWhat",
  age: 21,
  single: true,
  get fullName() {
    console.log(
      `${this.firstName} ${this.lastName} ${this.age} ${this.single}`
    );
  },
  set fullName(str) {
    let arr = str.split(" ");
    console.log(arr);
    this.firstName = arr[0];
    this.lastName = arr[1];
    this.age = arr[2];
    this.single = arr[3];
  },
};
// getter
userData.fullName; // getting the object data

// setter
userData.fullName = "Hadi Nsreeny 31 true"; // filling the object
userData.fullName; // getting the new data

// constructor
function Person(name, age, act) {
  this.name = name;
  this.age = age;
  this.act = act;
  this.printOut = function () {
    console.log(
      `Hey ${this.name}, you are too old ${this.age} and you do ${this.act}`
    );
  };
}
let zain = new Person("Zain", 21, ["sleep", "eat"]);
zain.printOut();
const olga = new Person("Olga", 40, "No thing");
olga.printOut();
// isDivisible function explained

// for in  object

// forEach  arr

// for of  arr
