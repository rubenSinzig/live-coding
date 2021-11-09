// Typescript -> A Javascript superset
console.log("Hey, I'm Typescript");

let x: number;
x = 2;
let w: string = "";
w = "Hey";
// something

// function add(x: number, y: number): number {
//   return x + y;
// }
const add = (x: number, y: number) => {
  return x + y;
};

const result = add(2, 3); // 5
console.log(result);

type Food = "Apple" | "Banana";
let eat: Food = "Apple";

interface Car {
  model: string;
  year: number;
  [key: string]: any;
}
const Ferrari: Car = {
  model: "448",
  year: 2020,
};
const Bugatti: Car = {
  model: "diov",
  year: 2019,
  color: "red",
  madeYear: 2021,
};

let newArray: number[];
newArray = [2, 3, 5, 666];
// newArray.push("Hi");

type ListOfMany = [number?, string?, boolean?];
const arr: ListOfMany = [];
arr.push(22);
arr.push("Cool");
arr.push(true);
//arr.push({})
