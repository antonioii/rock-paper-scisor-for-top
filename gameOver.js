function gameOver(){

    let bodyDiv = document.querySelector('body');
    let bodyContainer = document.querySelector('#bodyContainer');
    bodyDiv.removeChild(bodyContainer);
    //delete all the DOM

    computerChoice = getComputerChoice();
    //store the value returned by getComputerChoice

    showFinal((playRound(userChoice, computerChoice)), userChoice, computerChoice);
    //starts the final page    
}

function showFinal(caseFinal, userChoice, computerChoice){
    if(caseFinal == 1 || caseFinal == 3 || caseFinal == 6) {
        computerPoints += 1;
    } else if(caseFinal == 2 || caseFinal == 4 || caseFinal == 5) {
        userPoints += 1;
    } else {
        computerPoints += 0;
        userPoints += 0;
    }
    //analises the last case to update the computerPoints and userPoints

    console.log('Here the final page will be displayed');
    console.log(`Computer last choice: ${computerChoice} / Your last choice: ${userChoice}`);
    console.log(`Your points: ${userPoints} / PC points: ${computerPoints}.`);
    //some console tests

    let body = document.querySelector('body');
    body.innerHTML = `
    
    <div id="bodyContainer">
        <div class="principalTitle">
            <h1>GAME OVER</h1>
        </div>

        <div>
            <h2 class="finalResult">5</h2>
            <h3 class="matchesExplanation"></h3>
            <p>Buttons below are not working yet, press F5 to play again</p>
        </div>

        <div class="finalbuttons">
            <button class="playAgain">PLAY AGAIN</button>
            <button class="finalRules">RULES</button>
        </div>
    </div>
    `;

    let finalResultDisplay = document.querySelector('.finalResult'); 
    if(userPoints > computerPoints) {
        finalResultDisplay.textContent = 'You win!';
    } else if(userPoints < computerPoints) {
        finalResultDisplay.textContent = 'You lost!'
    } else {
        finalResultDisplay.textContent = "Wow! It's a sequence of draws!"
    }

    let matchesExposition = document.querySelector('.matchesExplanation');
    matchesExposition.textContent = `Computer: ${computerPoints} | You: ${userPoints} points`;

    //create the final match DOM displaying the points    


    let replayButtom = document.querySelector('.playAgain');
    replayButtom.addEventListener('click', deleteDomAndReplay);
    //play again button functionality

    //MISSED YET: the rules functionality!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

function deleteDomAndReplay(){
    let body = document.querySelector('body');
    let bodyChild = document.querySelector('#bodyContainer ');
    body.removeChild(bodyChild)
    //delete DOM

    userRock = false;
    userPaper = false;
    userScissor = false;
    computerChoice = '';
    userChoice = '';
    numberOfRounds = 0;
    userPoints = 0;
    computerPoints = 0;
    //reset all the variables of the program
    nextRound(body);
    //call the nextRound
}
