// Get the computer's choice
function getComputerChoice(number) {
    return Math.floor(Math.random() * number); // Multiply a random number and round down to a whole number
}

// Get the human's choice
function getHumanChoice() 
{   
    return prompt("Pick betwen rock, paper, scissors: ");
}

   
// Play the entire game
function playGame() {

    //  Declare the players' score variables
    let humanScore = 0;
    let computerScore = 0;

    // Play the game five times
    for (let i = 0; i < 5; i++) {

        const humanSelection = (getHumanChoice().toLowerCase());
        const computerSelection = getComputerChoice(3);
        playRound(humanSelection, computerSelection);

        // Play and calculate a round
        function playRound(humanChoice, computerChoice) {
            if (humanSelection === "rock" && computerSelection === 0 || 
                humanSelection === "paper" && computerSelection === 1 || 
                humanSelection === "scissors" && computerSelection === 2
            ) {
                if (computerSelection === 0) {
                    console.log("The computer picked rock and you picked " + humanSelection)
                }
                else if (computerSelection === 1) {
                    console.log("The computer picked paper and you picked " + humanSelection)
                }
                else if (computerSelection === 2) {
                    console.log("The computer picked scissors and you picked " + humanSelection)
                }
                console.log("It's a tie! No point for both")
            }    

            else if (humanSelection === "rock" && computerSelection === 1 || 
                humanSelection === "paper" && computerSelection === 2 || 
                humanSelection === "scissors" && computerSelection === 0
            ) {
                if (computerSelection === 0) {
                    console.log("The computer picked rock and you picked " + humanSelection)
                }
                else if (computerSelection === 1) {
                    console.log("The computer picked paper and you picked " + humanSelection)
                }
                else if (computerSelection === 2) {
                    console.log("The computer picked scissors and you picked " + humanSelection)
                }
                console.log("You lost! 1 Point for computer.");
                computerScore++;
            }
        
            else if (humanSelection === "rock" && computerSelection === 2 || 
                    humanSelection === "paper" && computerSelection === 0 || 
                    humanSelection === "scissors" && computerSelection === 1
            ) {
                if (computerSelection === 0) {
                    console.log("The computer picked rock and you picked " + humanSelection)
                }
                else if (computerSelection === 1) {
                    console.log("The computer picked paper and you picked " + humanSelection)
                }
                else if (computerSelection === 2) {
                    console.log("The computer picked scissors and you picked " + humanSelection)
                }
                console.log("You Won! 1 Point for user.");
                humanScore++;
            }
        }
    }

    // Calculate the winner
    if (humanScore > computerScore)
        {
            console.log("YOU WON THE GAME")
        }
    else if (humanScore < computerScore) 
        {
            console.log("YOU LOST THE GAME")
        }
    else 
        {
        console.log("IT'S A TIE!")
        }
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

playGame();