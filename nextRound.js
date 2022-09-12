function reloadPage(){
    document.location.reload(true);
}
//reload page without cashe

function nextRound(){
    let bodyResultContainer = document.querySelector('#bodyResultContainer');
    let inGameButtons = document.querySelector('.inGameButtons');
    let body = document.querySelector('body');
    body.removeChild(bodyResultContainer);
    body.removeChild(inGameButtons);
    //delete all the DOM

    userRock = false;
    userPaper = false;
    userScissor = false;
    computerChoice = '';
    userChoice = '';
    //reset all the variables used in a round   

    body.innerHTML = `
        <div id="bodyContainer">
            <div class="principalTitle">
                <h1></h1>
            </div>

            <div class="buttons">
                <button class="play"></button>
                <button class="rules">RULES</button>
            </div>
        </div>

        <script src="rulesButton.js"></script>
        <script src="playButton.js"></script>
        <script src="script.js"></script>
        <script src="roundResults.js"></script>
        <script src="nextRound.js"></script>
        <script src="gameOver.js"></script>
    `;
    //make the DOM as similar as the first one

    buttonsDiv = document.querySelector('.buttons');
    playButton = document.querySelector('.play');
    ruleButton = document.querySelector('.rules');
    alreadyClicked = false;
    ruleButton.addEventListener('click', activeRulesExplanation);
    //reset all the buttons state of the make your choice screen
    
    startChoices();
    //back to the playButton.js where we start the rounds

}