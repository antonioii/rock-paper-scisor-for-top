/*RULES EXPLANATION*/

const ruleButton = document.querySelector('.rules');
ruleButton.addEventListener('click', rulesAction, {once:true});

function rulesAction() {
    let ruleExplanationParent = document.querySelector('.principalTitle');
        let ruleExplanation = document.createElement('div');
        ruleExplanation.classList.add('ruleExplanation');

            let rulesTitle = document.createElement('h2');
            rulesTitle.textContent = "RULES";
            ruleExplanation.appendChild(rulesTitle);

            let rulesParagraph = document.createElement('p');
            rulesParagraph.textContent = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";
            ruleExplanation.appendChild(rulesParagraph);
            
        ruleExplanationParent.appendChild(ruleExplanation);
    }











/*CODIGO DO JOGO EM SI*/
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

//let playerSelection = prompt("Rock, paper or scisor? Make five choices.");

//game();