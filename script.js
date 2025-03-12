console.log("testing");


// Getting the computer's choice 

function getComputerChoice(number) {
    return Math.floor(Math.random() * number); // Multiply a random number and round down to a whole number
}

randomNumber = getComputerChoice(3);

if (randomNumber === 1)
    {
        console.log("rock");
    }
else if (randomNumber === 2)
    {
        console.log("paper");
    }
else
    {
        console.log("scissors");
    }

// Getting the human's choice


function getHumanChoice() {
    return prompt("Pick betwen rock, paper, scissors: ");
}

console.log(getHumanChoice());

