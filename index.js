// const resultDisplay = document.querySelector("#result");
const resultDisplay = document.createElement("div");
const resultContainer = document.querySelector("#container");
resultContainer.appendChild(resultDisplay);
const scoreDisplay = document.createElement("div");
resultContainer.appendChild(scoreDisplay);

function computerPlay(array) {
  const randomItem = Math.floor(Math.random() * array.length);
  return array[randomItem];
}

const computerSelection = computerPlay(["rock", "paper", "scissors"]);
console.log("computer selection is: ", computerSelection);
//exp rock, paper, or scissors

//step 2. play one game, user vs computer, return string, win, tie or loose
function playRound(playerSelection, computerSelection) {
  let computerScoreCounter = 0;
  console.log(" computerScore is: ", computerScoreCounter);
  let userScoreCounter = 0;
  console.log("userScore is :", userScoreCounter);
  countScore(computerScoreCounter, userScoreCounter);
  if (
    (computerSelection.toLowerCase() === "rock" &&
      playerSelection.toLowerCase() === "scissors") ||
    (computerSelection.toLowerCase() === "scissors" &&
      playerSelection.toLowerCase() === "paper") ||
    (computerSelection.toLowerCase() === "paper" &&
      playerSelection.toLowerCase() === "rock")
  ) {
    // countScore(1, 0);
    computerScoreCounter += 1;
    return displayResult(
      `You loose, ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`
    );
  } else if (
    playerSelection.toLowerCase() === computerSelection.toLowerCase()
  ) {
    return displayResult(
      `you draw, ${playerSelection.toLowerCase()} equals ${computerSelection.toLowerCase()} `
    );
  } else {
    // countScore(0, 1);
    userScoreCounter += 1;
    return displayResult(
      `you win ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`
    );
  }
}
const playGame = playRound("Scissors", computerSelection);
console.log("and the result is:", playGame);

//event listeners

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {
  console.log("the result is:", playRound("paper", computerSelection));
});

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => {
  // alert("the result is:", playRound("paper", computerSelection));
  console.log("the result is:", playRound("Rock", computerSelection));
});

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", () => {
  console.log("the result is: ", playRound("Scissors", computerSelection));
});

// display result for each round in div
function displayResult(string) {
  return (resultDisplay.textContent = string);
}

function countScore(computerWins, userWins) {
  let computerScore = 0;
  computerScore = computerScore + computerWins;
  let userScore = 0;
  userScore = userScore + userWins;
  return (scoreDisplay.textContent = `computer: ${computerScore} Player: ${userScore}`);
}

//quand je clique sur le bouton rock, an event fires.
//it call playround function which returns a string
//I want to display that string in divResultDisplay
//how do i do?
