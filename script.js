// Get the computer's choice
function getComputerChoice(number) {
    return Math.floor(Math.random() * number); // Multiply a random number and round down to a whole number
}

// Play the entire game
function playGame() {
    const btn = document.querySelectorAll(".button");

    //  Declare the players' score variables
    let roundCount = 0;
    let humanScore = 0;
    let computerScore = 0;

    btn.forEach((item) => {
        item.addEventListener("click", handleClick);
    });

    function handleClick(event) {
        if (event.target.id === "rock") {
            playerSelection = "rock";
        }
        else if (event.target.id === "paper") {
            playerSelection= "paper";
        }
        else {
            playerSelection= "scissors";
        }

        // Create multiple divs to display game progress
        const container = document.querySelector("#container");

        const round = document.createElement("div");
        round.classList.add("round");
        container.appendChild(round);
        
        const content = document.createElement("div");
        content.classList.add("content");
        container.appendChild(content);

        const score = document.createElement("div");
        score.classList.add("score");
        container.appendChild(score);

        const currentScore = document.createElement("div");
        currentScore.classList.add("currentScore");
        container.appendChild(currentScore);

        const result = document.createElement("div");
        result.classList.add("result");
        container.appendChild(result);

        const humanSelection = (playerSelection.toLowerCase());
        const computerSelection = getComputerChoice(3);
        playRound(humanSelection, computerSelection);

        // Play and calculate a round
        function playRound(humanChoice, computerChoice) {
            if (humanSelection === "rock" && computerSelection === 0 || 
                humanSelection === "paper" && computerSelection === 1 || 
                humanSelection === "scissors" && computerSelection === 2
            ) {
                if (computerSelection === 0) {
                    content.textContent = "The computer picked rock and you picked " + humanSelection;
                }
                else if (computerSelection === 1) {
                    content.textContent = "The computer picked paper and you picked " + humanSelection;
                }
                else {
                    content.textContent = "The computer picked scissors and you picked " + humanSelection;
                }
                score.textContent = "It's a tie! No points.";
            }    

            else if (humanSelection === "rock" && computerSelection === 1 || 
                    humanSelection === "paper" && computerSelection === 2 || 
                    humanSelection === "scissors" && computerSelection === 0
            ) {
                if (computerSelection === 0) {
                    content.textContent = "The computer picked rock and you picked " + humanSelection;
                }
                else if (computerSelection === 1) {
                    content.textContent = "The computer picked paper and you picked " + humanSelection;
                }
                else {
                    content.textContent = "The computer picked scissors and you picked " + humanSelection;
                }
                score.textContent = "You lost! 1 Point for computer.";
                computerScore++;
            }
                
            else if (humanSelection === "rock" && computerSelection === 2 || 
                        humanSelection === "paper" && computerSelection === 0 || 
                        humanSelection === "scissors" && computerSelection === 1
            ) {
                if (computerSelection === 0) {
                    content.textContent = "The computer picked rock and you picked " + humanSelection
                }
                else if (computerSelection === 1) {
                    content.textContent = "The computer picked paper and you picked " + humanSelection
                }
                else {
                    content.textContent = "The computer picked scissors and you picked " + humanSelection
                }
                score.textContent = "You won! 1 Point for user.";
                humanScore++;
            }
        }

        roundCount++;
        round.textContent = "ROUND " + roundCount;
        currentScore.textContent = "You have " + humanScore + " and the computer has " + computerScore;

        // Announce the winner and finish the game
        if (humanScore === 5 || computerScore === 5) {  
            if (humanScore === 5) {
                result.textContent = "YOU WON THE GAME!";
                btn.forEach((item) => {
                item.removeEventListener("click", handleClick);
                })
            }
            else if (computerScore === 5) {
                result.textContent = "YOU LOST THE GAME!";
                btn.forEach((item) => {
                item.removeEventListener("click", handleClick);
                })
            }
        }
    }
}
playGame();