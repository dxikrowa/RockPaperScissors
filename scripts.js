function getComputerChoice(Rock, Paper, Scissors) {
    let randomChoice = Math.floor(Math.random() * 3);
    Rock = "rock";
    Paper = "paper";
    Scissors = "scissors";
    if(randomChoice === 0){
        
        return Rock;
    }
    if(randomChoice === 1) {
        return Paper;
    }
    if(randomChoice === 2) {
        return Scissors;
    }
    
}
let win = 0;
let loss = 0;
function playRound(playerSelection, computerSelection,) {
    playerSelection = prompt("Its your turn, Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    getComputerChoice();
    computerSelection = getComputerChoice();
    // If player chooses rock

    
    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lost!"+ " " + "The computer chose" + " " + computerSelection);
        loss = loss + 1
       
    }
    else if (playerSelection ==="rock" && computerSelection === "scissors") {
        console.log("You won!"+ " " + "The computer chose" + " " + computerSelection);
        win = win + 1;
    }

    // If player chooses paper

    if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You won!"+ " " + "The computer chose" + " " + computerSelection);
        win = win + 1;
    }
    
    else if (playerSelection ==="paper" && computerSelection === "scissors") {
        console.log("You lost!"+ " " + "The computer chose" + " " + computerSelection);
        loss = loss + 1
    }

    // If player chooses scissors

    if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lost!"+ " " + "The computer chose" + " " + computerSelection);
        loss = loss + 1
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You won!"+ " " + "The computer chose" + " " + computerSelection);
        win = win + 1;
    }
    // If both choose the same
     if(playerSelection === computerSelection) {
        console.log("Tie!");
     }


}

function playGame() {
    
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
   if (win > loss) {
    console.log("You won!" + "Your score is:" + " " + win + " " + "The computer score is:" + " " + loss);
    }
    else if (win < loss) {
        console.log("You lost!" + "Your score is:" + " " + win + " " + "The computer score is:" + " " + loss);
    }
    else if (win === loss) {
        console.log("You tied!");
    }
} 
 playGame();


