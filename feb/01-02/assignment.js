console.log("--------------- Assignment One ---------------");
// Write a function that accepts several parameters
// and calculates the number of money that will have been saved as pension until a person retires.
// The function should be self invoked and should have the following parameters:
// The current age of the person
// e.g. 40
// The retirement age of the person
// e.g. 60
// The monthly wage the person earns
// e.g. 1000
// The percentage (as integer) that the person saves each month
// e.g. 10%
// If the person has already retired then the message:
// ‘You’re already retired!’ should be printed.
// If not, then the program should calculate how many years remain until the person retires,
// the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and
// she saves the 5% of it.
// How much money will she have saved until she retires?
// Output: $30000
let currentAge = 40;
let ageOfRetirement = 65;
let salaryPerMonth = 2000;
let saveEachMonthInPercent = 5;
((
  currentAge = 35,
  ageOfRetirement = 65,
  salaryPerMonth = 2500,
  saveEachMonthInPercent = 10
) => {
  if (currentAge >= ageOfRetirement) {
    console.log(`You are ${currentAge} years and already in retirement`);
  } else {
    let saveInPercent = saveEachMonthInPercent / 100;
    let monthToRetirement = (ageOfRetirement - currentAge) * 12;
    let saveUntilRetirement =
      monthToRetirement * salaryPerMonth * saveInPercent;
    console.log(
      `If you save ${saveEachMonthInPercent}% of your ${salaryPerMonth}€ each month you will have ${saveUntilRetirement}€ until your retirement age of ${ageOfRetirement} years.`
    );
  }
})(currentAge, ageOfRetirement, salaryPerMonth, saveEachMonthInPercent);
console.log("--------------- Assignment Two ---------------");
// Create a function that accepts a text from user
// and check if the user has entered a month name
// if so print out that month and in which season it is.
// I will be nice again to you and offer the arrays 😉
//   const months = [
//     "december",
//     "january",
//     "february",
//     "march",
//     "april",
//     "may",
//     "jun",
//     "july",
//     "august",
//     "september",
//     "october",
//     "november"
//   ];
//   const seasons = ["Winter", "Spring", "Summer", "Autumn"];
// Examples :
// > monthCheck("I love Jun"); -> Jun is in Summer
// > monthCheck("We need Kartoffel"); -> I couldn’t find any month in your text, sorry try again
const months = [
  "december",
  "january",
  "february",
  "march",
  "april",
  "may",
  "jun",
  "july",
  "august",
  "september",
  "october",
  "november",
];
const seasons = ["Winter", "Spring", "Summer", "Autumn"];
// ############################## TRY AGAIN ##############################
const monthCheck = (str) => {
  let strToArr = str.toLowerCase().trim().split(" ");
  // console.log(strToArr);
  for (let i = 0; i < strToArr.length; i++) {
    for (let j = 0; j < months.length; j++) {
      if (months[j] == strToArr[i]) {
        console.log();
      }
    }
  }
};
monthCheck("I love Jun"); // Jun is in Summer
monthCheck("We need Kartoffel"); // I couldn’t find any month in your text, sorry try again
console.log("--------------- Assignment End ---------------");
