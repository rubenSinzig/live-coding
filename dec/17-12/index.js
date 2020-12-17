// Exercise 17.12.2020

let number1 = 'something';
console.log(number1);

// how to output everything in one line? console.log(number1 [1] [5] );
console.log(number1[1]);
console.log(number1[5]);

let name1 = 'Super Mario was';
let age = 25;
let name2 = 'in';
let year = 2006;
console.log(name1, age, name2, year);

let isMarried = 1980 < 2020;

// the solution path is probably wrong --> let programmingLanguage = 'JavaScript is fun:';
let programmingLanguage = 'JavaScript is fun:';
let isFun = 10 == 10;
console.log(programmingLanguage, isFun);

// how to output everything in one line? console.log(programmingLanguage [0] [4] );
console.log(programmingLanguage[0]);
console.log(programmingLanguage[4]);

console.log(programmingLanguage.length);

let isStudent = 35;
isStudent <= 30 ? console.log('Ticket costs €5,00') : console.log('Ticket costs €12,00');

// is it possible to get a third output if my speed is exact 50km/h ?
let speedCheck = 49;
speedCheck >= 50 ? console.log('You´re going too fast!') : console.log('You´re driving below the speed limit, OMA');
