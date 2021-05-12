// HTML Elements
const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

// game constants
const xSymbol = "×";
const oSymbol = "○";

// game variables
let gameIsLive = true;
let xIsNext = true;

// functions
const letterToSymbol = (letter) => (letter === "x" ? xSymbol : oSymbol);

const handleWin = (letter) => {
  // change the gameIsLive status to false and add the winning message to the statusDiv
  
};

const checkGameStatus = () => {
  // grab the cells second class from the cellDivs array and assign them to the variables (topLeft,topMiddle,topRight, middleLeft, middleMiddle,...)
 

  // check winner
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    
  } 

};

// event Handlers
const handleReset = () => {

};

const handleCellClick = (e) => {
  const classList = e.target.classList;

  // check if the game is still live and the targeted div has no 'X' or 'O' class

  
// check whose turn it is and then check the game status

};



// event listeners
resetDiv.addEventListener("click", handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener("click", handleCellClick);
}
