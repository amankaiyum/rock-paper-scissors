function computerPlay() {
    const selection = ["Rock", "Paper", "Scissors"];
    let randNumber = Math.floor(selection.length * Math.random());
    return selection[randNumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    if (computerSelection === "Rock") {
        if (playerSelection === "rock") {
            console.log("It's a Tie!");
            return;
        }
        else if (playerSelection === "paper") {
            console.log("You Win!");
            return;
        }
        else if (playerSelection ==="scissors") {
            console.log("You Lose!");
            return;
        }
        else {
            console.log("You must use rock, paper, or scissors!");
            return;
        }
    }
    else if (computerSelection === "Paper") {
        if (playerSelection === "rock") {
            console.log("You Lose!");
            return;
        }
        else if (playerSelection === "paper") {
            console.log("It's a Tie!");
            return;
        }
        else if (playerSelection === "scissors") {
            console.log("You Win!");
            return;
        }
        else {
            console.log("You must use rock, paper, or scissors!");
            return;
        }
    }
    else if (computerSelection ==="Scissors") {
        if (playerSelection === "rock") {
            console.log("You Win!");
            return;
        }
        else if (playerSelection === "paper") {
            console.log("You Lose!");
            return;
        }
        else if (playerSelection ==="scissors") {
            console.log("It's a Tie!");
            return;
        }
        else {
            console.log("You must use rock, paper, or scissors!");
            return;
        }
    }
}