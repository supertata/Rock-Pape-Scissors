// alert("hello");
// prompt("enter rock paper or scissors");

function computerPlay(array) {
  const randomItem = Math.floor(Math.random() * array.length);
  return array[randomItem];
}

const computerSelection = computerPlay(["rock", "papers", "scissors"]);
console.log("computer selection is: ", computerSelection);
//exp rock, paper, or scissors

//step 2. play one game, user vs computer, return string, win, tie or loose
function playRound(playerSelection, computerSelection) {
  if (
    (computerSelection.toLowerCase() === "rock" &&
      playerSelection.toLowerCase() === "scissors") ||
    (computerSelection.toLowerCase() === "scissors" &&
      playerSelection.toLowerCase() === "paper") ||
    (computerSelection.toLowerCase() === "paper" &&
      playerSelection.toLowerCase() === "rock")
  ) {
    return `You loose, ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`;
  } else if (
    playerSelection.toLowerCase() === computerSelection.toLowerCase()
  ) {
    return `you draw, ${playerSelection.toLowerCase()} equals ${computerSelection.toLowerCase()} `;
  } else {
    return `you win ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`;
  }
}
const playGame = playRound("Scissors", computerSelection);
console.log("and the result is:", playGame);
