function computerPlay() {
    const selection = ["Rock", "Paper", "Scissors"];
    let randNumber = Math.floor(selection.length * Math.random());
    return selection[randNumber];
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    if (computerSelection === "Rock") {
        if (playerSelection === "rock") {
            return "It's a Tie!";
        }
        else if (playerSelection === "paper") {
            return "You Win! Paper beats Rock";
        }
        else if (playerSelection ==="scissors") {
            return "You Lose! Rock beats Scissors";
        }
        else {
            return "You must use rock, paper, or scissors!";
        }
    }
    else if (computerSelection === "Paper") {
        if (playerSelection === "rock") {
            return "You Lose! Paper beats Rock";
        }
        else if (playerSelection === "paper") {
            return "It's a Tie!";
        }
        else if (playerSelection === "scissors") {
            return "You Win! Scissors beats Paper";
        }
        else {
            return "You must use rock, paper, or scissors!";
        }
    }
    else if (computerSelection ==="Scissors") {
        if (playerSelection === "rock") {
            return "You Win! Rock beats Scissors";
        }
        else if (playerSelection === "paper") {
            return "You Lose! Scissors beats Paper";
        }
        else if (playerSelection ==="scissors") {
            return "It's a Tie!";
        }
        else {
            return "You must use rock, paper, or scissors!";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Choose Rock, Paper, or Scissors");
        let result = playRound(playerSelection);
        if (result.includes("Win")) {
            playerScore += 1;
        }
        else if (result.includes("Lose")) {
            computerScore += 1;
        }
        console.log(result);
        console.log(`Player vs Computer \n${playerScore} - ${computerScore}`);
    }
    if (playerScore > computerScore) {
        return `Final Score ${playerScore} - ${computerScore} You Win!`;
    }
    else if (playerScore < computerScore) {
        return `Final Score ${playerScore} - ${computerScore} You Lose!`;
    }
    else {
        return `Final Score ${playerScore} - ${computerScore} It's a Tie!`;
    }
}