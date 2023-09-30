const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

choiceBtns.forEach(button => button.addEventListener("click", () => {
    let player = button.textContent;
    let computer = computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner(player, computer);
}));

function computerTurn(){
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    switch(randomNumber){
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
        case 4:
            return "LIZARD";
        case 5:
            return "SPOCK";
    }
}

function checkWinner(player, computer){
    if(player === computer){
        return "Draw!";
    }
    else if(computer === "ROCK"){
        return (player === "PAPER") ? "BAZINGA! You Won!" : "You Lose!"
    }
    else if(computer === "PAPER"){
        return (player === "SCISSORS") ? "BAZINGA! You Won!" : "You Lose!"
    }
    else if(computer === "SCISSORS"){
        return (player === "ROCK") ? "BAZINGA! You Won!" : "You Lose!"
    }
    else if(computer === "LIZARD"){
        return (player === "PAPER") ? "BAZINGA! You Won!" : "You Lose!"
    }
    else if(computer === "SPOCK"){
        return (player === "PAPER") ? "BAZINGA! You Won!" : "You Lose!"
    }
}
