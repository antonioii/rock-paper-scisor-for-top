let buttonsDiv = document.querySelector('.buttons');
let playButton = document.querySelector('.play');
playButton.addEventListener('click', startChoices, {once:true});

function startChoices(){
    document.querySelector('h1').textContent = "Make your choice";
    //change the name of "Rock Paper Scisor" to "Make your choice"

    buttonsDiv.removeChild(playButton);
    //take off the play button

    let rulesButton = document.querySelector('.rules');
    //creat a node object for the rule button
    
    let choicesDiv = document.createElement('div');
    choicesDiv.classList.add('choicesDiv');
    //create a choices div to receive the rock, paper and scissors buttons

        let rockButton = document.createElement('button');
        rockButton.classList.add('rock');
        rockButton.textContent = "ROCK";
        choicesDiv.appendChild(rockButton);
        //creates the rock button

        let paperButton = document.createElement('button');
        paperButton.classList.add('paper');
        paperButton.textContent = "PAPER";
        choicesDiv.appendChild(paperButton);
        //creates the paper button

        let scizButton = document.createElement('button');
        scizButton.classList.add('sciz');
        scizButton.textContent = "SCISSORS";
        choicesDiv.appendChild(scizButton);
        //creates the scissors button
    buttonsDiv.insertBefore(choicesDiv, rulesButton);

    let quitButton = document.createElement('button');
    quitButton.classList.add('quitButton');
    quitButton.textContent = "QUIT";
    quitButton.setAttribute('onclick', 'reloadPage()');
    buttonsDiv.appendChild(quitButton);
    //A button to reload the page:<button class="quitButton" onclick="reloadPage()">QUIT</button>

    makeAChoice();
}
