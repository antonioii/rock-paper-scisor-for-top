const limitOfRounds = 2;
let numberOfRounds = 0;
let userPoints = 0;
let computerPoints = 0;

function setResultPage(){
    let body = document.querySelector('body');
    body.innerHTML =
        `
            
            <div id="bodyResultContainer">

                <div class="currentRound">
                    <div class="lateralRoundTitleLeft">
                        <h2>R</h2>
                        <h2>O</h2>
                        <h2>U</h2>
                        <h2>N</h2>
                        <h2>D</h2>
                    </div>
                    <h2 class="h2Left"></h2>
                </div>

                <div class="mainArea">

                    <div class="computerArea">
                        <div class="computerChoice"> 
                            <h1 class="computerChoiceFig"></h1>
                        </div>
                        <div class="computerScore">
                            <h4>PC:</h4>
                            <h4 class="computerScoreValue"></h4>
                        </div>
                    </div>

                    <div class="resultDisplay">
                        <div class="resultTitle"> 
                            <h1 class="resultTitleCaption"></h1>
                        </div>
                        <div class="roundsDisplay">
                                <h2>Round:</h2>
                                <h2 class="resultDisplayRound"></h2>
                        </div>
                    </div>

                    <div class="userArea">
                        <div class="userChoice"> 
                            <h1 class="userChoiceFig"></h1>
                        </div>
                        <div class="userScore">
                            <h4>YOU:</h4>
                            <h4 class="userScoreValue"></h4>
                        </div>
                    </div>
                </div>

                    

                <div class="currentRound">
                    <div class="lateralRoundTitleRight">
                        <h2>R</h2>
                        <h2>O</h2>
                        <h2>U</h2>
                        <h2>N</h2>
                        <h2>D</h2>
                    </div>
                    <h2 class="h2Right"></h2>
                </div>

            </div>    

            <div class="inGameButtons">
                <button class="quitButton" onclick="reloadPage()">QUIT</button>
                <button class="nextButton" onclick="nextRound()">Next Round</button>
            </div>
        `;
}
//set the result page elements

function showResult(result){
    setResultPage();
    //create the round result page

    if(numberOfRounds == limitOfRounds -1) {
    let nextButton = document.querySelector('.nextButton');
    nextButton.textContent = 'Final Round';
    }
    //if its pre-final, write final round in the 'next button'

    switch(true){
        case result == '0' :
            return setCase(0);
            break;
        case result == '1' :
            return setCase(1);
            break;
        case result == '2' :
            return setCase(2);
            break;
        case result == '3' :
            return setCase(3);
            break;
        case result == '4' :
            return setCase(4);
            break;
        case result == '5' :
            return setCase(5);
            break;
        case result == '6' :
            return setCase(6);
            break;
        default : return window.console.error('Something went wrong. Press F5 to try again.');    
    };
}

function setCase(resultCase){
    let computerChoiceFig = document.querySelector('.computerChoiceFig');
    let userChoiceFig = document.querySelector('.userChoiceFig');
    computerChoiceFig.textContent = computerChoice;
    userChoiceFig.textContent = userChoice;
    //set the choice figs to the choices variable values inside the script.js

    numberOfRounds += 1;
    let rightRoundTitle = document.querySelector('.h2Right');
    let leftRoundTitle = document.querySelector('.h2Left');
    rightRoundTitle.textContent = numberOfRounds;
    leftRoundTitle.textContent = numberOfRounds;
    //number of rounds is updated and sent to the lateral round titles

    let resultDisplayRound = document.querySelector('.resultDisplayRound');
    resultDisplayRound.textContent = numberOfRounds;
    //also, number of rounds is sent to the display round in screen center

    if(resultCase == 0) { //draw case
        let resultTitleCaption = document.querySelector('.resultTitleCaption');
        resultTitleCaption.textContent = "It's a Draw!";
        let computerScoreValue = document.querySelector('.computerScoreValue');
        computerScoreValue.textContent = computerPoints;
        let userScoreValue = document.querySelector('.userScoreValue');
        userScoreValue.textContent = userPoints;
    
    } else if(resultCase == 1 || resultCase == 3 || resultCase == 6) { //lost case
        let resultTitleCaption = document.querySelector('.resultTitleCaption');
        resultTitleCaption.textContent = "You lost this round!";
        computerPoints += 1;
        let computerScoreValue = document.querySelector('.computerScoreValue');
        computerScoreValue.textContent = computerPoints;
        let userScoreValue = document.querySelector('.userScoreValue');
        userScoreValue.textContent = userPoints;
    
    } else if(resultCase == 2 || resultCase == 4 || resultCase == 5) { //win case
        let resultTitleCaption = document.querySelector('.resultTitleCaption');
        resultTitleCaption.textContent = "You win this round!";
        userPoints += 1;
        let computerScoreValue = document.querySelector('.computerScoreValue');
        computerScoreValue.textContent = computerPoints;
        let userScoreValue = document.querySelector('.userScoreValue');
        userScoreValue.textContent = userPoints;

    } else {alert('Something went wrong, close this window and restart with F5.');};

}
//setted the resultTitleCaptions accordingly the resultcases
//points given
//setted the score values accordingly the points


