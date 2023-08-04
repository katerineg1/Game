let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function computerChoice() {
  const computerInput = document.getElementById("computerInput");
  const randomIndex = Math.floor(Math.random() * choices.length);

  computerInput.value=choices[randomIndex];
  return choices[randomIndex];
}

function restartGame(){
  let texto = "";
  const result = document.getElementById("result");
  const computerInput = document.getElementById("computerInput");

  result.textContent = texto;
  computerInput.value = texto;
}

function playRound(computerSelection) {
  
  const result = document.getElementById("result");
  const select = document.getElementById("playerInput");
  let index = select.selectedIndex;
  let options = select.options;
  let option = options[index];
  let value = option.value;
  
  let playerSelection = value;

  if (playerSelection === computerSelection) {
    result.textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    result.textContent = "You win!";
  } else {
    computerScore++;
    result.textContent = "You lose!";
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

export { playRound, game, computerChoice, restartGame };