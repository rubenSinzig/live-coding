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

// constructor own
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

// for in  object
for (let prop in zain) {
  console.log(`zain.${prop} : ${zain[prop]}`);
}

let family = [
  ["Zain", 22, "teacher"],
  ["Olga", 40, "chef"],
];
for (let i = 0; i < family.length; i++) {
  for (let j = 0; j < family[i].length; j++) {
    console.log(family[i][j]);
  }
}
// forEach  arr
family.forEach((arr) => arr.forEach((element) => console.log(element)));
// for of  arr
for (let [key, val] of Object.entries(zain)) {
  console.log(` ${key} : ${val}`);
}

// Creat a constructor function that receive product details (productName,prise,inventory) thin build a method to display this data in clear outputted form
// build two product using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling prise 2.33€. we have 2232 in our store

// get & set, create a car object that uses getter and setter method to get and set the following ()
