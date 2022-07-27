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
    let result = playRound(playerSelection);
    if (result.includes("Win")) {
            playerScore += 1;
    }
    else if (result.includes("Lose")) {
            computerScore += 1;
    }

    if (playerScore + computerScore < 5) {
        return `${result} ---- Player vs Computer ${playerScore} - ${computerScore}`;
    }
    else if (playerScore + computerScore === 5) {
        let scorePlayer = playerScore;
        let scoreComputer = computerScore;
        playerScore = 0;
        computerScore = 0;
        if (scorePlayer > scoreComputer) {
        return `Final Score ${scorePlayer} - ${scoreComputer} You Win!`;
        }
        else if (scorePlayer < scoreComputer) {
        return `Final Score ${scorePlayer} - ${scoreComputer} You Lose!`;
        }
        else {
        return `Final Score ${scorePlayer} - ${scoreComputer} It's a Tie!`;
        }
    }
}

let playerScore = 0;
let computerScore = 0;
const results = document.querySelector('.results');


const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    let score = game();
    results.textContent = `${score}`;
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    score = game();
    results.textContent = `${score}`;
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    score = game();
    results.textContent = `${score}`;
});