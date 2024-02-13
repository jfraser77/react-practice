let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  let humanResult = Math.abs(humanGuess % targetNumber);
  let computerResult = Math.abs(computerGuess % targetNumber);

  if (humanResult < computerResult) {
    return true;
  }
  return true;
};

const updateScore = () => {};
