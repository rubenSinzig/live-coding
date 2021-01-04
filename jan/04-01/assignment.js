// 1. Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.
let inThePark = "I can walk in the park all day!"
let shortInThePark = inThePark.substring(18, 22);
console.log(shortInThePark);

// 2. Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console.
let world = "Hello World";
let upWorld = world.toUpperCase();
console.log(upWorld);

// 3. Declare another variable with the value of “Earthlings”. Convert the value to lower case and print the converted value to the console.
let person = "Earthlings";
let lowPerson = person.toLowerCase();
console.log(lowPerson);

// 4. Declare a variable with the value “JavaScript”. Print the the characters “aSc” to the console using the substring() method.
let java = "JavaScript";
let subJava = java.substring(3, 6);
console.log(subJava);

// 5. Check if the sentence “nice shoes” contains the letter l.
let shoe = "nice shoes";
let checkShoe = shoe.includes("l");
console.log(checkShoe);

// 6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ.
person = "EEarthlingsE";
console.log(person);

// 7. Create a new string from a given string, taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt
 let subStrJava = java.substring(java.length - 3);
 console.log(subStrJava + java + subStrJava);

// 8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes “Java”.
 let value = "This is JavaScript";
 let uppValue = value.toUpperCase();
 console.log(uppValue);
 console.log(uppValue.includes("Java"));

// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
let chaPerson = person.substring(2, 10);
console.log(person[10] + chaPerson + person[0]);

// 10. Create 3 different variables about yourself using strings as values e.g. let firstName = “Maria”. Print the sentence to the console using string interpolation e.g. “My name is Maria. I live in Berlin and I am a teacher”.
let firstName = "Ruben";
let lastName = "Sinzig";
let age = "31 y";
console.log(`My name is ${firstName} ${lastName} and I am ${age}.`);

// 11. Declare a variable and assign the value “the quick brown fox” (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let fox = "the quick brown fox";
let firstFox = fox.substring(0, 1);
let secFox = fox.substring(fox.length - 18)
let uppFox = firstFox.toUpperCase();
console.log(uppFox + secFox);
