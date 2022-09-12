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
        </div>

        <div class="finalbuttons">
            <span>It's not working yet, press F5 to play again!</span>
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
    //create the final match DOM displaying the points

    
    //finalButtons functionalities
    
}