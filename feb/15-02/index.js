class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  printData() {
    return `Hey ${this.name}, you are too old ${this.age}`;
  }
}
// const newBuddy = new Person("Steel", 21);
//console.log(newBuddy.printData());
// extends && super
// extends and super()
// extends --> inheriting the methods from the Original class which being called
// super --> gets access to the parent's properties and methods

class Kid extends Person {
  constructor(_name, _age, _height = 0) {
    super(_name, _age);
    this.height = _height;
  }
  show() {
    return `this is a kid class from Person, ${this.name}`;
  }
}

const zain = new Kid("Zain", 21);
console.log(zain);
console.log(zain.show());
// Date

// UTC Coordinated Universal Time
// CET Central European Time
// GMT Greenwich Mean Time
// More about that https://24timezones.com/#/map

let time = new Date().getMonth();
console.log(time);
