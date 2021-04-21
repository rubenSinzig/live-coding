// function for multiply
function multiply() {
  let userNumOne = parseInt(document.querySelector("#numOne").value);
  let userNumTwo = parseInt(document.querySelector("#numTwo").value);
  let resultMul = "";

  resultMul += `${userNumOne} * ${userNumTwo} = ${userNumOne * userNumTwo}`;

  document.querySelector(".resultMultiply").innerHTML = resultMul;
}

// function for divide
function divide() {
  let userNumOne = parseInt(document.querySelector("#numOne").value);
  let userNumTwo = parseInt(document.querySelector("#numTwo").value);
  let resultDiv = "";

  resultDiv += `${userNumOne} / ${userNumTwo} = ${userNumOne / userNumTwo}`;

  document.querySelector(".resultDivide").innerHTML = resultDiv;
}

// function for add
function adding() {
  let userNumOne = parseInt(document.querySelector("#numOne").value);
  let userNumTwo = parseInt(document.querySelector("#numTwo").value);
  let resultAdd = "";

  resultAdd += `${userNumOne} + ${userNumTwo} = ${userNumOne + userNumTwo}`;

  document.querySelector(".resultAdd").innerHTML = resultAdd;
}

// function for minus
function minus() {
  let userNumOne = parseInt(document.querySelector("#numOne").value);
  let userNumTwo = parseInt(document.querySelector("#numTwo").value);
  let resultMin = "";

  resultMin += `${userNumOne} - ${userNumTwo} = ${userNumOne - userNumTwo}`;

  document.querySelector(".resultMinus").innerHTML = resultMin;
}

// function for counting the number of vowels
// It doesn't work try to find a solution later
function count() {
  let userInput = document.querySelector("#vowels").value;
  let strToArr = document
    .querySelector("#vowels")
    .value.toLowerCase()
    .split("");
  for (let i = 0; i <= strToArr.length; i++) {
    let result = 0;
    switch (strToArr[i]) {
      case "a":
        result += 1;
        continue;
      case "e":
        result += 1;
        continue;
      case "i":
        result += 1;
        continue;
      case "o":
        result += 1;
        continue;
      case "u":
        result += 1;
        continue;
      default:
        break;
    }
  }
  let output = `${userInput}: ${result}`;
  document.querySelector(".resultCounting").innerHTML = output;
}
