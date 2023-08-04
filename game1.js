let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    const computerInput = document.getElementById("computerInput");
    const randomIndex = Math.floor(Math.random() * choices.length);

    computerInput.value=choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lose!";
  }
}

function displayScores() {
  console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
}

function game() {
  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt("Choose: rock, paper, or scissors");
    const computerSelection = computerChoice();
    const resultMessage = playRound(playerSelection, computerSelection);
    
    console.log(`Round ${round}: ${resultMessage}`);
    displayScores();
  }
  
  if (playerScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game. Better luck next time!");
  } else {
    console.log("It's a tie. The game ends in a draw.");
  }
}

export { playRound, game, computerChoice };