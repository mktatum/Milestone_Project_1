//Set up the choices with what they can beat
//This is a hash table of objects you can referecne by name
var choices  =  {rock : {name: "Rock", defeats: ["scissors","lizard"]},
                paper: {name: "Paper", defeats: ["rock", "spock"]},
                scissors: {name: "Scissors", defeats: ["paper", "lizard"]},
                lizard: {name: "Lizard", defeats:["paper","spock"]},
                spock: {name: "Spock", defeats:["scissors","rock"]}
                };


//Get the computers choice
var computerChoice = Math.random();
if (computerChoice < 0.2) {
    computerChoice = "rock";
} else if (computerChoice <= 0.4) {
    computerChoice = "paper";
} else if (computerChoice <= 0.6) {
    computerChoice = "scissors";
} else if (computerChoice <= 0.8) {
    computerChoice = "lizard";
} else {
    computerChoice = "spock";
}


//Get the users choice, normalising to lower case    
var userChoice = prompt("Do you choose rock, paper, scissors, lizard, or spock?").toLowerCase();

alert("The computer chose " + computerChoice);    

//Check for a tie
if(computerChoice == userChoice){
    alert("It's a tie");
//Check for a valid choice
}else if(choices[userChoice] === undefined){
    alert("Invalid Choice");
}else{
    //Get the chosen one as an object
    userChoice = choices[userChoice];



    //Check For a win
    /*var victory = false;
    for(var i = 0; i < userChoice.defeats.length; i++){
        if(computerChoice == userChoice.defeats[i])
        {
            victory = true;
            break;
        }
    }*/

    //Improved check, inspired by Mke Spa Guy
    var victory = userChoice.defeats.indexOf(computerChoice) > -1;

    //Display result
    if(victory) {
        alert("Vitory! " + userChoice.name + " wins!")
    }else{
        alert("Defeat, " + computerChoice + " wins!");
    }   
}
// -------------------------------secondary code option-------------------------------

var userChoice = prompt("Do you choose rock, paper, scissors, lizard, or spock?")
var computerChoice = Math.random();
if (computerChoice < 0.2) {
    computerChoice = "rock";
} else if (computerChoice <= 0.4) {
    computerChoice = "paper";
} else if (computerChoice <= 0.6) {
    computerChoice = "scissors";
} else if (computerChoice <= 0.8) {
    computerChoice = "lizard";
} else {
    computerChoice = "spock";
}

alert("The computer chose " + computerChoice);

var compare = function(choice1, choice2){
    if (choice1 === choice2) {
        alert("And... It's a tie!");
    }

//If the user chose rock...
else if (choice1 === "rock") {
    if (choice2 === "scissors") {
        alert("Rock wins!");
    } else if (choice2 === "paper") {
        alert("Paper wins!");
    } else if (choice2 === "lizard") {
        alert("Rock wins!");
    } else {
        alert("Spock wins!");
    }
}

//If the user chose paper...
else if (choice1 === "paper") {
    if (choice2 === "scissors") {
        alert("Scissors wins!");
    } else if (choice2 === "rock") {
        alert("Paper wins!");
    } else if (choice2 === "lizard") {
        alert("Lizard wins!");
    } else {
        alert("Paper wins!");
    }
}

//If the user chose scissors...
else if (choice1 === "scissors") {
    if (choice2 === "paper") {
        alert("Scissors wins!");
    } else if (choice2 === "rock") {
        alert("Rock wins!");
    } else if (choice2 === "lizard") {
        alert("Scissors wins!");
    } else {
        alert("Spock wins!");
    }
}

//If the user chose lizard...
else if (choice1 === "lizard") {
    if (choice2 === "scissors") {
        alert("Scissors wins!");
    } else if (choice2 === "rock") {
        alert("Rock wins!");
    } else if (choice2 === "paper") {
        alert("Lizard wins!");
    } else {
        alert("Lizard wins!");
    }
}

//If the user chose spock...
else if (choice1 === "spock") {
    if (choice2 === "scissors") {
        alert("Spock wins!");
    } else if (choice2 === "rock") {
        alert("Spock wins!");
    } else if (choice2 === "lizard") {
        alert("Lizard wins!");
    } else {
        alert("Paper wins!");
    }
}
};
compare(userChoice, computerChoice);