const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;
let userNumber = 0;
const result = document.querySelector(".result");
const userInput = document.querySelector("#userInput");
const currency = document.querySelector("#currency");
function registerUserValue(e) {
  console.dir(e.target);
  userNumber = e.target.value;
}

function convert() {
  let currentCurrencyValue;
  console.log(currency.value);
  switch (currency.value) {
    case "euro":
      currentCurrencyValue = 1;
      break;
    case "dollar":
      currentCurrencyValue = 1.2002;
      break;
    case "yen":
      currentCurrencyValue = 0.0076;
      break;
    default:
      currentCurrencyValue = 1;
  }
  result.innerHTML = `${currentCurrencyValue * parseInt(userNumber)}€`;
}

currency.addEventListener("change", convert);
userInput.addEventListener("keyup", registerUserValue);
