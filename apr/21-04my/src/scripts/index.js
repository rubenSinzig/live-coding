function multiply() {
  let userNumOne = document.querySelector("#numOne").value;
  let userNumTwo = document.querySelector("#numTwo").value;
  let resultText = "";

  resultText += `${userNumOne} * ${userNumTwo} = ${userNumOne * userNumTwo}`;

  document.querySelector(".result").innerHTML = resultText;
}
