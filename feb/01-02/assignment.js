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
