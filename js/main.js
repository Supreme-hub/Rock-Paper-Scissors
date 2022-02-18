function computerPlay() {
    let ran = Math.floor(Math.random() * 3 + 1);
    switch(ran) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    let win = false;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Tie";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        win = false;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        win = false;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        win = false;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        win = true;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        win = true;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        win = true;
    }
    return win;
}

function game() {
    let Hwin = 0;
    let Cwin = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt('What will you Play');
        let tmp = playRound(playerSelection, computerSelection);
        if (tmp === "Tie") {
            alert(`It's a Tie`);
            i--;
        }
        else if (tmp) {
            alert(`You Won! ${playerSelection} beats ${computerSelection}`);
            Hwin++;
        }
        else if (!tmp){
            alert(`You Lost! ${playerSelection} beats ${computerSelection}`);
            Cwin++;
        }
    }
    if (Hwin > Cwin) {
        return "You Won";
    }
    else {
        return "You Lost"
    }
}

alert("Let's Play Rock Paper Scissors")
alert(game());
