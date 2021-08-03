exports.convert = (...args) => {
  let letterToNum = [];
  let userInput = args.toString().toLowerCase().split("");
  //   console.log(userInput);
  userInput.map((arg) => {
    switch (arg) {
      case "a":
        letterToNum.push(1);
        break;
      case "b":
        letterToNum.push(2);
        break;
      case "c":
        letterToNum.push(3);
        break;
      case "d":
        letterToNum.push(4);
        break;
      case "e":
        letterToNum.push(5);
        break;
      case "f":
        letterToNum.push(6);
        break;
      case "g":
        letterToNum.push(7);
        break;
      case "h":
        letterToNum.push(8);
        break;
      case "i":
        letterToNum.push(9);
        break;
      case "j":
        letterToNum.push(10);
        break;
      case "k":
        letterToNum.push(11);
        break;
      case "l":
        letterToNum.push(12);
        break;
      case "m":
        letterToNum.push(13);
        break;
      case "n":
        letterToNum.push(14);
        break;
      case "o":
        letterToNum.push(15);
        break;
      case "p":
        letterToNum.push(16);
        break;
      case "q":
        letterToNum.push(17);
        break;
      case "r":
        letterToNum.push(18);
        break;
      case "s":
        letterToNum.push(19);
        break;
      case "t":
        letterToNum.push(20);
        break;
      case "u":
        letterToNum.push(21);
        break;
      case "v":
        letterToNum.push(22);
        break;
      case "w":
        letterToNum.push(23);
        break;
      case "x":
        letterToNum.push(24);
        break;
      case "y":
        letterToNum.push(25);
        break;
      case "z":
        letterToNum.push(26);
        break;

      default:
        console.log(`Sorry, I can't find this letter, please try again.`);
    }
    return letterToNum;
  });
  let letterArrToNum = letterToNum.join("");
  return letterArrToNum;
};
