// Destructuring objects as function parameters
function fun(num, { name }) {
  console.log(num);
  let firstName = { name };
  console.log(firstName);
}

fun(2, { name: "Hadi", age: 31, add: "B" });

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

// constructor our own 😬
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
const newObj = new Person("Zain", 21, ["sleep", "eat"]);
newObj.printOut();
const olga = new Person("Olga", 40, "No thing");
olga.printOut();

// for in  object
for (let prop in newObj) {
  console.log(`zain.${prop} : ${newObj[prop]}`);
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
for (let [key, val] of Object.entries(newObj)) {
  console.log(` ${key} : ${val}`);
}

console.log(Object.entries(newObj));
// Creat a constructor function that receive product details (productName,prise,inventory) thin build a method to display this data in clear outputted form
// build two product using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling prise 2.33€. we have 2232 in our store
function Product(productName, price, inventory) {
  this.productName = productName;
  this.price = price;
  this.inventory = inventory;
  this.display = function () {
    console.log(
      `From item ${this.productName} selling price ${this.price}€. we have ${this.inventory} in our store`
    );
  };
}
const pepsi = new Product("Pepsi", 2.33, 2232);
pepsi.display();
// get & set, create a car object that uses getter and setter method to get and set the following (modelName,modelNumber,enginCapacity)
// first get the data
// then set the data

const car = {
  modelName: "Audi",
  modelNumber: "A8",
  enginCapacity: 332,
  get data() {
    console.log(
      `The brand ${this.modelName} model ${this.modelNumber} has enginCapacity of ${this.enginCapacity}hp`
    );
  },
  set data(obj) {
    // let arr = str.split(" ");
    // this.modelName = arr[0];
    // this.modelNumber = arr[1];
    // this.enginCapacity = arr[2]

    this.modelName = obj.name;
    this.modelNumber = obj.num;
    this.enginCapacity = obj.cap;
  },
};
// "Hadi Nsreeny 1989 yes"
car.data = { name: "BMW", num: "i8", cap: 33 };
car.data;
// class
class Animals {
  // constructor method aka setup
  constructor(_kind, _hometown) {
    this.kind = _kind;
    this.hometown = _hometown;
  }
  // instances properties after constructor
  display() {
    console.log(`this very cute ${this.kind} lives in ${this.hometown}`);
  }
}
console.log(Animals);
const cat = new Animals("cat", "LA");
cat.display();

console.log(cat);
const newPet = new Animals("dog", "NY");
newPet.display();
console.log(typeof Animals);
newPet.displayAge = () => {
  console.log("Hi");
};

newPet.displayAge();
console.log(newPet);

class Color {
  constructor() {
    this.name = "";
    this.tep = 0;
  }
}

const red = new Color();
console.log(red);
red.name = "RED";
red.tep = 232;
console.log(red);

// TV app
class Tv {
  constructor(_brand, _channel = 1, _volume = 10) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }
  incVolume() {
    // increase the volume
    if (this.volume < 100) {
      this.volume++;
      console.log(this.volume);
    } else {
      console.log("This is too much");
    }
  }
  decVolume() {
    // decrease the volume
    if (this.volume > 0) {
      this.volume--;
      console.log(this.volume);
    } else {
      console.log("NO sound");
    }
  }
  rest() {
    // volume and channel
    this.channel = 1;
    this.volume = 10;
  }
  randomChannel() {
    // max 50
    this.channel = Math.floor(Math.random() * 50) + 1;
    console.log(`you are watching channel ${this.channel}`);
  }
  display() {
    return `This Tv ${this.brand}, had ${this.channel} channels and the volume is on ${this.volume}`;
  }
}

const samsung = new Tv("SAMSUNG");
console.log(samsung);
samsung.incVolume();

samsung.decVolume();
const apple = new Tv("Apple", 30, 100);
console.log(apple);

// extends && super
