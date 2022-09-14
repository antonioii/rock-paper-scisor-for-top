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
    rockButton.addEventListener('click',() => {
        userRock = true;
        userChoice = 'ROCK';
        makeComputerChoice();},
        {once:true});

    const paperButton = document.querySelector('.paper');
    paperButton.addEventListener('click',() => {
        userPaper = true;
        userChoice = 'PAPER';
        makeComputerChoice();},
        {once:true});

    const scizButton = document.querySelector('.sciz');
    scizButton.addEventListener('click',() => {
        userScissor = true;
        userChoice = 'SCISSOR';
        makeComputerChoice();},
        {once:true});
    //change the value inside the variables when clicked and activate the cpu turn
}

function makeComputerChoice() {
    if(numberOfRounds == limitOfRounds) {
        gameOver();
    } else {

    let bodyDiv = document.querySelector('body');
    let bodyContainer = document.querySelector('#bodyContainer');
    bodyDiv.removeChild(bodyContainer);
    //take off the bodyContainer

    computerChoice = getComputerChoice();
    //store the value returned by getComputerChoice

    showResult(playRound(userChoice, computerChoice));
    //start the result round
    }
}

function getComputerChoice(){
    let choiceNumber = randomIntFromInterval(1,3);
    //pick a random number between 1-3
    switch(true){
        case choiceNumber == 1 : return "ROCK";
        break;
        case choiceNumber == 2 : return "PAPER";
        break;
        default : return "SCISSOR"
    }
    //pick the choiceNumber and return the string to makeComputerChoice()
}

function playRound(playerSelection, computerSelection) {    
    switch(true) {    
       case playerSelection == computerSelection :
        return '0'; //"It's a draw.";
        break;   
       case playerSelection == 'ROCK' && computerSelection == 'PAPER' :
           return '1';//`You lose, ${computerSelection} beats ${playerSelection}`;
           break;
       case playerSelection == 'ROCK' && computerSelection == 'SCISSOR' :
           return '2';//`You win, ${computerSelection} lose to ${playerSelection}`;
           break;
       case playerSelection == 'PAPER' && computerSelection == 'SCISSOR' :
           return '3';//`You lose, ${computerSelection} beats ${playerSelection}`;
           break;
       case playerSelection == 'PAPER' && computerSelection == 'ROCK' :
           return '4';//`You win, ${computerSelection} lose to ${playerSelection}`;
           break;
       case playerSelection == 'SCISSOR' && computerSelection == 'PAPER' :
           return '5';//`You win, ${computerSelection} lose to ${playerSelection}`;
           break;
       case playerSelection == 'SCISSOR' && computerSelection == 'ROCK' :
           return '6';//`You lose, ${computerSelection} beats to ${playerSelection}`;
           break;
       default : return window.console.error('You choose an invalid option, please only scissor, rock or paper. F5 to try again.');
    }
    //analise and compare de cases
   }