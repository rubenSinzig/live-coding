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
