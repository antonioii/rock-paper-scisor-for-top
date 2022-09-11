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
    let bodyDiv = document.querySelector('body');
    let bodyContainer = document.querySelector('#bodyContainer');
    bodyDiv.removeChild(bodyContainer);
    //take off the bodyContainer

    computerChoice = getComputerChoice();
    //store the value returned by getComputerChoice

    showResult(playRound(userChoice, computerChoice));
    //start the result round

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
       case playerSelection == computerSelection :
        return '0'; //"It's a draw.";
        break;   
       case playerSelection == 'rock' && computerSelection == 'paper' :
           return '1';//`You lose, ${computerSelection} beats ${playerSelection}`;
           break;
       case playerSelection == 'rock' && computerSelection == 'scissor' :
           return '2';//`You win, ${computerSelection} lose to ${playerSelection}`;
           break;
       case playerSelection == 'paper' && computerSelection == 'scissor' :
           return '3';//`You lose, ${computerSelection} beats ${playerSelection}`;
           break;
       case playerSelection == 'paper' && computerSelection == 'rock' :
           return '4';//`You win, ${computerSelection} lose to ${playerSelection}`;
           break;
       case playerSelection == 'scissor' && computerSelection == 'paper' :
           return '5';//`You win, ${computerSelection} lose to ${playerSelection}`;
           break;
       case playerSelection == 'scissor' && computerSelection == 'rock' :
           return '6';//`You lose, ${computerSelection} beats to ${playerSelection}`;
           break;
       default : return window.console.error('You choose an invalid option, please only scissor, rock or paper. F5 to try again.');
    }
    //analise and compare de cases
   }

//se qualquer variavel for true,
//chama a função que vai colocar na tela 'pc choice' por alguns segundos e chama a função makeComputerChoice
//função computer choice vai competir os valores user com pc
//output na tela com resultado "draw, win round, lose round"
//permite 5 jogos e no final output com game over win e lose the game e play again



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