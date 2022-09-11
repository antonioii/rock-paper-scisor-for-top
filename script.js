function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
//Random numbers

/*CODIGO DO JOGO EM SI:*/

let userRock = false;
let userPaper = false;
let userScissor = false;
//variables representing the buttons clicked
let computerChoice = '';
let userChoice = '';
//variables representing the user choice and the computer choice

function makeAChoice(){
    const rockButton = document.querySelector('.rock');
    rockButton.addEventListener('click',() => {userRock = true; userChoice = 'rock'; makeComputerChoice();} , {once:true});
    const paperButton = document.querySelector('.paper');
    paperButton.addEventListener('click',() => {userPaper = true; userChoice = 'paper'; makeComputerChoice();} , {once:true});
    const scizButton = document.querySelector('.sciz');
    scizButton.addEventListener('click',() => {userScissor = true; userChoice = 'scissor'; makeComputerChoice();} , {once:true});
    //change the value inside the variables when clicked and activate the cpu turn
}

function makeComputerChoice() {
    document.querySelector('h1').textContent = "Computer is choosing";
    //change the name of "Make your choice" to "NOW IT'S COMPUTER TURN"

    const bodyContainer = document.querySelector('#bodyContainer');
    const buttonsDiv = document.querySelector('.buttons');
    bodyContainer.removeChild(buttonsDiv);
    //take off the buttons field

    computerChoice = getComputerChoice();
    //store the value returned by getComputerChoice

    console.log(playRound(userChoice, computerChoice));
    //start a round and prints the result in console
}

function getComputerChoice(){
    let choiceNumber = randomIntFromInterval(1,3);
    //pick a random number between 1-3
    switch(true){
        case choiceNumber == 1 : return "rock";
        break;
        case choiceNumber == 2 : return "paper";
        break;
        default : return "scissor"
    }
    //pick the choiceNumber and return the string to makeComputerChoice()
}

function playRound(playerSelection, computerSelection) {    
    switch(true) {
       case playerSelection == computerSelection : return "It's a draw.";
       break;   
       case playerSelection == 'rock' && computerSelection == 'paper' :
           return `You lose, ${computerSelection} beats ${playerSelection}`;
           break;
       case playerSelection == 'rock' && computerSelection == 'scissor' :
           return `You win, ${computerSelection} lose to ${playerSelection}`;
           break;
       case playerSelection == 'paper' && computerSelection == 'scissor' :
           return `You lose, ${computerSelection} beats ${playerSelection}`;
           break;
       case playerSelection == 'paper' && computerSelection == 'rock' :
           return `You win, ${computerSelection} lose to ${playerSelection}`;
           break;
       case playerSelection == 'scissor' && computerSelection == 'paper' :
           return `You win, ${computerSelection} lose to ${playerSelection}`;
           break;
       case playerSelection == 'scissor' && computerSelection == 'rock' :
           return `You lose, ${computerSelection} beats to ${playerSelection}`;
           break;
       default : return window.console.error('You choose an invalid option, please only scissor, rock or paper. F5 to try again.');
    }
    //analise and compare de cases
   }

//se qualquer variavel for true,
//chama a função que vai colocar na tela 'pc choice' por alguns segundos e chama a função makeComputerChoice
//função computer choice vai competir os valores user com pc
//output na tela com resultado



/*Old code*/ /*


//function to play 5 rounds
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <=5; i++){
        let result = playRound(playerSelection, getComputerChoice());
        result != undefined ? console.log(result) : window.console.error('You choose an invalid option, please only scissor, rock or paper. F5 to try again.');
        
        if (result != undefined && result.charAt(4) == 'w') {playerScore++}
        else if (result != undefined && result.charAt(4) == 'l') {computerScore++}
       }

       console.log(`\nFinal Score:\nPlayer: ${playerScore}, Computer: ${computerScore}\n\nPress F5 to play again.`);
}

//let playerSelection = prompt("Rock, paper or scissor? Make five choices.");

//game();
*/