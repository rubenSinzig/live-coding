// Create a program that prints a random integer from 1 - 6.
console.log(parseInt(Math.random() * 6) + 1 );

// Math.trunc
// The Math.trunc() function is very similar to Math.floor() and Math.ceil()
// with the difference that Math.trunc() does not round up or down.

// The Math.trunc() function only cuts off the dot and ALL the digits to the right of it ( 5.78  ->  5 ).
console.log(Math.floor(5.78));   // 5
console.log(Math.ceil(5.78));    // 6
console.log(Math.trunc(5.78));   // 5

//and it also works with negative numbers
console.log(Math.floor(-5.78));   // -6
console.log(Math.ceil(-5.78));    // -5
console.log(Math.trunc(-5.78));   // -5

// example at the Math.random function (random number between 1 and 10)
console.log(Math.floor(Math.random() * 10 ) + 1);
console.log(Math.trunc(Math.random() * 10 ) + 1); // in this example it works but we always use Math.floor in this case