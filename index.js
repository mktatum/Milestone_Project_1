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
    
// Player chooses rock
    if ((player === "ROCK") && (computer === "ROCK")) {
        return "It's a draw.";
    } else if((player === "ROCK") && (computer === "PAPER")) {
        return "Oops! Paper covers rock.";
    } else if ((player === "ROCK") && (computer === "SCISSORS")) {
        document.querySelector('.bazinga').style.display = "block";
        document.querySelector('.gameDivContent').style.opacity = "0";
        return "BAZINGA! Rock crushes scissors.";
    } else if((player === "ROCK") && (computer === "LIZARD")) {
        document.querySelector('.bazinga').style.display = "block";
        document.querySelector('.gameDivContent').style.opacity = "0";
        return "BAZINGA! Rock crushes lizard.";
    } else if((player === "ROCK") && (computer === "SPOCK")) {
        return "Oops! Spock vaporizes rock.";
// Player chooses paper
    } else if((player === "PAPER") && (computer === "ROCK")) {
        document.querySelector('.bazinga').style.display = "block";
        document.querySelector('.gameDivContent').style.opacity = "0";
        return "BAZINGA! Paper covers rock.";
    } else if((player === "PAPER") && (computer === "PAPER")) {
        return "It's a draw.";
    } else if ((player === "PAPER") && (computer === "SCISSORS")) {
        return "Oops! Scissors cuts paper.";
    } else if((player === "PAPER") && (computer === "LIZARD")) {
        return "Oops! Lizard eats paper.";
    } else if((player === "PAPER") && (computer === "SPOCK")) {
        document.querySelector('.bazinga').style.display = "block";
        document.querySelector('.gameDivContent').style.opacity = "0";
        return "BAZINGA! Paper disproves Spock.";
// Player chooses scissors
    } else if((player === "SCISSORS") && (computer === "ROCK")) {
        return "Oops! Rock crushes scissors.";
    } else if((player === "SCISSORS") && (computer === "PAPER")) {
        document.querySelector('.bazinga').style.display = "block";
        document.querySelector('.gameDivContent').style.opacity = "0";
        return "BAZINGA! Scissors cut paper.";
    } else if ((player === "SCISSORS") && (computer === "SCISSORS")) {
        return "It's a draw.";
    } else if((player === "SCISSORS") && (computer === "LIZARD")) {
        document.querySelector('.bazinga').style.display = "block";
        document.querySelector('.gameDivContent').style.opacity = "0";
        return "BAZINGA! Scissors decapitates lizard.";
    } else if((player === "SCISSORS") && (computer === "SPOCK")) {
        return "Oops! Spock smashes scissors.";
// Player chooses lizard
    } else if((player === "LIZARD") && (computer === "ROCK")) {
        return "Oops! Rock crushes lizard.";
    } else if((player === "LIZARD") && (computer === "PAPER")) {
        document.querySelector('.bazinga').style.display = "block";
        document.querySelector('.gameDivContent').style.opacity = "0";
        return "BAZINGA! Lizard eats paper.";
    } else if ((player === "LIZARD") && (computer === "SCISSORS")) {
        return "Oops! Scissors decapitates lizard.";
    } else if((player === "LIZARD") && (computer === "LIZARD")) {
        return "It's a draw.";
    } else if((player === "LIZARD") && (computer === "SPOCK")) {
        document.querySelector('.bazinga').style.display = "block";
        document.querySelector('.gameDivContent').style.opacity = "0";
        return "BAZINGA! Lizard poisons Spock.";
// Player chooses Spock
    } else if((player === "SPOCK") && (computer === "ROCK")) {
        document.querySelector('.bazinga').style.display = "block";
        document.querySelector('.gameDivContent').style.opacity = "0";
        return "BAZINGA! Spock vaporizes rock.";
    } else if((player === "SPOCK") && (computer === "PAPER")) {
        return "Oops! Paper disproves Spock.";
    } else if ((player === "SPOCK") && (computer === "SCISSORS")) {
        document.querySelector('.bazinga').style.display = "block";
        document.querySelector('.gameDivContent').style.opacity = "0";
        return "BAZINGA! Spock smashes scissors.";
    } else if((player === "SPOCK") && (computer === "LIZARD")) {
        return "Oops! Lizard poisons Spock.";
    } else if((player === "SPOCK") && (computer === "SPOCK")) {
        return "It's a draw.";
    }    
}

// Get a reference to the .bazinga element
var bazingaElement = document.querySelector('.bazinga');

// Add an event listener to detect the end of the animation
bazingaElement.addEventListener('animationend', function() {
    // Remove the animation property to stop the animation
    bazingaElement.style.animation = 'none';
    
    // Optionally, set the opacity to 1 to ensure it stays fully visible
    bazingaElement.style.opacity = 1;
});

// Get a reference to the button element
var refreshButton = document.getElementById("refreshButton");

// Add a click event listener to the button
refreshButton.addEventListener("click", function() {
    // Reload the window when the button is clicked
    location.reload();
});