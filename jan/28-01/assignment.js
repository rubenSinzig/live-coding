// Create a function that receive a text from user
// and check if the user has entered a phone number, and print that out.
// Note :
// phone number should be within the German network starts with (030 or 017) only
// and has 7 digits after the prefix number
//  Examples :
// > phone("Hi, call me on 030221A398 "); -> This is not a valid phone number 030221A398
// > phone("Hi my number is 038  "); -> This is not a valid phone number 038
const phone = (str) => {
  let phoneNumber = str.trim().toLowerCase();
  let phoneA = parseInt(phoneNumber);
  console.log(phoneA);
};
console.log(phone("Hi, call me on 030221A398 "));
console.log(phone("Hi my number is 038  "));
