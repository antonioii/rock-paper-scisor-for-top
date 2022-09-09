let computerChoice = '';

//generates a random number between a min and max range
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

//get the computer value of rock, paper or scisor
function getComputerChoice(){
    //pick a random number between 1-3
    let choiceNumber = randomIntFromInterval(1,3);
    //pick the choiceNumber and return the string
    switch(true){
        case choiceNumber == 1 : return "rock";
        break;
        case choiceNumber == 2 : return "paper";
        break;
        default : return "scisor"
    }
}

//function to play a single round
function playRound(playerSelection, computerSelection) {
 //put the player input to lowercase just as the computer choice
 let playerSelectionCase = playerSelection.toLowerCase();   
 
 //analise and compare de cases
 switch(true) {
    case playerSelectionCase == computerSelection : return "It's a draw.";
    break;

    case playerSelectionCase == 'rock' && computerSelection == 'paper' :
        return `You lose, ${computerSelection} beats ${playerSelection}`;
        break;
    case playerSelectionCase == 'rock' && computerSelection == 'scisor' :
        return `You win, ${computerSelection} lose to ${playerSelection}`;
        break;
    case playerSelectionCase == 'paper' && computerSelection == 'scisor' :
        return `You lose, ${computerSelection} beats ${playerSelection}`;
        break;
    case playerSelectionCase == 'paper' && computerSelection == 'rock' :
        return `You win, ${computerSelection} lose to ${playerSelection}`;
        break;
    case playerSelectionCase == 'scisor' && computerSelection == 'paper' :
        return `You win, ${computerSelection} lose to ${playerSelection}`;
        break;
    case playerSelectionCase == 'scisor' && computerSelection == 'rock' :
        return `You lose, ${computerSelection} beats to ${playerSelection}`;
        break;
    default : return window.console.error('You choose an invalid option, please only scisor, rock or paper. F5 to try again.');
 }
}

//function to play 5 rounds
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <=5; i++){
        let result = playRound(playerSelection, getComputerChoice());
        result != undefined ? console.log(result) : window.console.error('You choose an invalid option, please only scisor, rock or paper. F5 to try again.');
        
        if (result != undefined && result.charAt(4) == 'w') {playerScore++}
        else if (result != undefined && result.charAt(4) == 'l') {computerScore++}
       }

       console.log(`\nFinal Score:\nPlayer: ${playerScore}, Computer: ${computerScore}\n\nPress F5 to play again.`);
}

const playerSelection = prompt("Rock, paper or scisor? Make your choice.");
game();