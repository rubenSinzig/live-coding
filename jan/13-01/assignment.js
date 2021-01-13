// Try to do it by yourself and don't look in yesterday solution. I trust you :)
// Count Occurrences.
/*
Create a function that accepts two arguments: a string and a letter. 
The function should count the number of occurrences of that letter in the string.
*/

// Example:

// countOccurrences("this is a string", "i") ➞ 3

const countOccurrences = (str, letter) => {
    let result = "";
    let counter = 0;
    let strToArray = str.split(""); // convert the string (str) into an Array
    // console.log(strToArray);
    for (let i = 0; i < strToArray.length; i++) {
        if (strToArray[i] == letter) {
            counter++;
        }
    }
    result = counter;
    return result;
};

console.log(countOccurrences("Now I try it by myself", "t")); // 


// 11. XO Create a function that takes a string.
// checks if it has the same number of ’x’s and ’o’s and returns either true or false.
// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
// isEqualNumXandO(“ooxx”) ➞ true
// isEqualNumXandO(“xooxx”) ➞ false
// isEqualNumXandO(“ooxXm”) ➞ true (case insensitive)
// isEqualNumXandO(“zpzpzpp”) ➞ true (returns true if no x and o)
// isEqualNumXandO(“zzoo”) ➞ false
const isEqualNumXandO = (str) => {
    let result;
    let counterX = 0;
    let counterO = 0;
    let strArr = str.split(""); // string to Array
    // console.log(strArr);
    for (let i = 0; i < strArr.length; i++) {
        // console.log(i);
        if (strArr[i] == "x" || strArr[i] == "X") {
            counterX++
        }
        if (strArr[i] == "o" || strArr[i] == "O") {
            counterO++
        }
    }
    if (counterX == counterO) {
        return true;
    }
    else {
        return false;
    };
}
console.log(isEqualNumXandO("ooxx")); // true
console.log(isEqualNumXandO("xooxx")); // false
console.log(isEqualNumXandO("ooxXm")); // true (case insensitive)
console.log(isEqualNumXandO("zpzpzpp")); // true (returns true if no x and o)
console.log(isEqualNumXandO("zzoo")); // false

// practicing on Loops
// const draw = (char) => {
//     let result = "";
//     // console.log(char);
//     for (let i = 0; i < 20; i++) {
//         console.log(char + "*");
//         for (let j = 0; j < i; j++) {
            
//         }
//         // console.log();
//     }
// };
// console.log(draw("*"));


