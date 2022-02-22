const r = document.querySelector('#r');
const p = document.querySelector('#p');
const s = document.querySelector('#s');
const div = document.querySelector('#result');
const cwinDOM = document.querySelector('#cwin');
const hwinDOM = document.querySelector('#hwin');
const final = document.querySelector('#final');
let cwin = 0;
let hwin = 0;

const resultDOM = document.createElement('h1');
resultDOM.setAttribute('id','rel');
div.appendChild(resultDOM);
const rel = document.querySelector('#rel');

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

function result(win, playerSelection, computerSelection) {
    let result = "";
    if (hwin === 5) {
        final.innerText = "You Won the whole Game!";
        return;
    }
    else if (cwin === 5) {
        final.innerHTML = "You lost the whole Game!";
        return;
    }
    if (win === true) {
        hwin++;
        result = "won";
    }
    else if (win === false) {
        cwin++;
        result = "lost";
    }
    else {
        rel.innerText = `It's a tie`;
        return;
    }
    rel.innerText = `You ${result}`;
    hwinDOM.innerText = `${hwin}`;
    cwinDOM.innerText = `${cwin}`;

}

r.addEventListener('click', () => {
    let computerSelection = computerPlay();
    let playerSelection = 'rock';
    let win = playRound(playerSelection, computerSelection);
    result(win, playerSelection, computerSelection);
} );
p.addEventListener('click', () => {
    let computerSelection = computerPlay();
    let playerSelection = 'paper';
    let win = playRound(playerSelection, computerSelection);
    result(win, playerSelection, computerSelection);
});
s.addEventListener('click', () => {
    let computerSelection = computerPlay();
    let playerSelection = 'scissors';
    let win = playRound(playerSelection, computerSelection);
    result(win, playerSelection, computerSelection);
});
