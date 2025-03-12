console.log("testing");


// Getting the computer's choice 

function getComputerChoice(number) {
    return Math.floor(Math.random() * number); // Multiply a random number and round down to a whole number
}

randomComputerChoice = getComputerChoice(3);


if (randomComputerChoice === 1)
    {
        randomComputerChoice = "computerRock";
        console.log("rock");
    }
else if (randomComputerChoice === 2)
    {
        randomComputerChoice = "computerPaper";
        console.log("paper");
    }
else
    {
        randomComputerChoice = "computerScissors";
        console.log("scissors");
    }


console.log(randomComputerChoice);


// Getting user's choice

function getHumanChoice() {
    return prompt("Pick betwen rock, paper, scissors: ");
}
    
let HumanChoice = getHumanChoice();


// Logic to play a round 

if (HumanChoice === "rock" && randomComputerChoice === "computerRock")
    {
    console.log("It's a tie!");
    }
else if (HumanChoice === "rock" && randomComputerChoice === "computerPaper")
    {
    console.log("You lost!");
    }
else if (HumanChoice === "rock" && randomComputerChoice === "computerScissors")
    {
    console.log("You Won!");
    }
else if (HumanChoice === "paper" && randomComputerChoice === "computerRock")
    {
    console.log("You Won!");
    }
else if (HumanChoice === "paper" && randomComputerChoice === "computerPaper")
    {
    console.log("It's a tie!");
    }
else if (HumanChoice === "paper" && randomComputerChoice === "computerScissors")
    {
    console.log("You lost!");
    }
else if (HumanChoice === "scissors" && randomComputerChoice === "computerRock")
    {
    console.log("You lost!");
    }
else if (HumanChoice === "scissors" && randomComputerChoice === "computerPaper")
    {
    console.log("You won!");
    }
else if (HumanChoice === "scissors" && randomComputerChoice === "computerScissors")
    {
    console.log("It's a tie!");
    }