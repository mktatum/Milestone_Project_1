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
// NEW TEST JS CODE {
// let item =
// { //Player chooses ROCK
//     player: "ROCK",
//     draw: {
//         values: ["ROCK"],
//         message: "It's a draw."
//     },
//     wins: {
//         values: ["SCISSORS", "LIZARD"],
//         message: ["Bazinga! Rock crushes Scissors.", "Bazinga! Rock crushes Lizard."]
//     },
//     losses: ["PAPER", "SPOCK"],
//     //End of player chooses ROCK
//     //Player chooses PAPER
//     player: "PAPER",
//     draw: {
//         values: ["PAPER"],
//         message: "It's a draw."
//     },
//     wins: {
//         values: ["ROCK", "SPOCK"],
//         message: ["Bazinga! Paper covers Rock.", "Bazinga! Paper disproves Spock."]
//     },
//     losses: ["SCISSORS", "LIZARD"],
//     //End of player chooses PAPER
//     //Player chooses SCISSORS
//     player: "SCISSORS",
//     draw: {
//         values: ["SCISSORS"],
//         message: "It's a draw."
//     },
//     wins: {
//         values: ["PAPER", "LIZARD"],
//         message: ["Bazinga! Scissors cuts Paper.", "Bazinga! Scissors decapitates Lizard."]
//     },
//     losses: ["ROCK", "SPOCK"],
//     //End of player chooses SCISSORS
//     //Player chooses LIZARD
//     player: "LIZARD",
//     draw: {
//         values: ["LIZARD"],
//         message: "It's a draw."
//     },
//     wins: {
//         values: ["SPOCK", "PAPER"],
//         message: ["Bazinga! Lizard poisons Spock.", "Bazinga! Lizard eats Paper."]
//     },
//     losses: ["ROCK", "SPOCK"],
//     //End of player chooses LIZARD
//     //Player chooses SPOCK
//     player: "SPOCK",
//     draw: {
//         values: ["SPOCK"],
//         message: "It's a draw."
//     },
//     wins: {
//         values: ["ROCK", "SCISSORS"],
//         message: ["Bazinga! Spock vaporizes Rock.", "Bazinga! Spock smashes Scissors."]
//     },
//     losses: ["ROCK", "SPOCK"],
//     //End of player chooses SPOCK

//     checkWinner = function(computer) {
//         if (this.draw.values.includes(computer))
//         {
//             return this.draw.message;
//         } else (this.wins.values.includes(computer))
//         {
//             this.showBazinga()
//             return this.wins.message[this.wins.values.indexOf(computer)]
//         }
//     },

//     showBazinga = function()
//         {
//             document.querySelector('.bazinga').style.display = "block";
//             document.querySelector('.gameDivContent').style.opacity = "0";
//         }
// }
// }

function checkWinner(player, computer){
// Player chooses rock
    if ((player === "ROCK") && (computer === "ROCK")) {
        return "It's a draw.";
    } else if((player === "ROCK") && (computer === "PAPER")) {
        return "Oops! Paper covers rock.";
    } else if ((player === "ROCK") && (computer === "SCISSORS")) {
        showBazinga();
        return "BAZINGA! Rock crushes scissors.";
    } else if((player === "ROCK") && (computer === "LIZARD")) {
        showBazinga();
        return "BAZINGA! Rock crushes lizard.";
    } else if((player === "ROCK") && (computer === "SPOCK")) {
        return "Oops! Spock vaporizes rock.";
// Player chooses paper
    } else if((player === "PAPER") && (computer === "ROCK")) {
        showBazinga();
        return "BAZINGA! Paper covers rock.";
    } else if((player === "PAPER") && (computer === "PAPER")) {
        return "It's a draw.";
    } else if ((player === "PAPER") && (computer === "SCISSORS")) {
        return "Oops! Scissors cuts paper.";
    } else if((player === "PAPER") && (computer === "LIZARD")) {
        return "Oops! Lizard eats paper.";
    } else if((player === "PAPER") && (computer === "SPOCK")) {
        showBazinga();
        return "BAZINGA! Paper disproves Spock.";
// Player chooses scissors
    } else if((player === "SCISSORS") && (computer === "ROCK")) {
        return "Oops! Rock crushes scissors.";
    } else if((player === "SCISSORS") && (computer === "PAPER")) {
        showBazinga();
        return "BAZINGA! Scissors cut paper.";
    } else if ((player === "SCISSORS") && (computer === "SCISSORS")) {
        return "It's a draw.";
    } else if((player === "SCISSORS") && (computer === "LIZARD")) {
        showBazinga();
        return "BAZINGA! Scissors decapitates lizard.";
    } else if((player === "SCISSORS") && (computer === "SPOCK")) {
        return "Oops! Spock smashes scissors.";
// Player chooses lizard
    } else if((player === "LIZARD") && (computer === "ROCK")) {
        return "Oops! Rock crushes lizard.";
    } else if((player === "LIZARD") && (computer === "PAPER")) {
        showBazinga();
        return "BAZINGA! Lizard eats paper.";
    } else if ((player === "LIZARD") && (computer === "SCISSORS")) {
        return "Oops! Scissors decapitates lizard.";
    } else if((player === "LIZARD") && (computer === "LIZARD")) {
        return "It's a draw.";
    } else if((player === "LIZARD") && (computer === "SPOCK")) {
        showBazinga();
        return "BAZINGA! Lizard poisons Spock.";
// Player chooses Spock
    } else if((player === "SPOCK") && (computer === "ROCK")) {
        showBazinga();
        return "BAZINGA! Spock vaporizes rock.";
    } else if((player === "SPOCK") && (computer === "PAPER")) {
        return "Oops! Paper disproves Spock.";
    } else if ((player === "SPOCK") && (computer === "SCISSORS")) {
        showBazinga();
        return "BAZINGA! Spock smashes scissors.";
    } else if((player === "SPOCK") && (computer === "LIZARD")) {
        return "Oops! Lizard poisons Spock.";
    } else if((player === "SPOCK") && (computer === "SPOCK")) {
        return "It's a draw.";
    }    
}

function showBazinga()
{
    document.querySelector('.bazinga').style.display = "block";
    document.querySelector('.gameDivContent').style.opacity = "0";
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