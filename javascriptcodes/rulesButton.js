/*Antonio Sérgio - 10-09-2022*/
/*Rules Explanation Button*/

let ruleButton = document.querySelector('.rules');
let alreadyClicked = false;
ruleButton.addEventListener('click', activeRulesExplanation);

//function to check if a button is already clicked in order to remove or make the explanatory window
function activeRulesExplanation(){
    if(alreadyClicked) {
        alreadyClicked = false;
        let ruleExplanationParent = document.querySelector('.principalTitle');
        let ruleExplanation = document.querySelector('.ruleExplanation');
        ruleExplanationParent.removeChild(ruleExplanation);
    }
    else {
        alreadyClicked = true;
        rulesAction();
    }
}

//function to create the explanatory window
function rulesAction() {
    let ruleExplanationParent = document.querySelector('.principalTitle');
        let ruleExplanation = document.createElement('div');
        ruleExplanation.classList.add('ruleExplanation');

            let rulesTitle = document.createElement('h2');
            rulesTitle.textContent = "RULES";
            ruleExplanation.appendChild(rulesTitle);

            let rulesParagraph = document.createElement('p');
            rulesParagraph.textContent = "Jogue Pedra (rock), papel (paper) ou tesoura (scissor). Serão três rodadas (rounds). Ao final das três, será mostrado se você ganhou do computador ou não... Aperte 'PLAY' para jogar, 'RULES' para fechar/abrir as regras, ou 'QUIT' no meio do jogo para reiniciar.";
            ruleExplanation.appendChild(rulesParagraph);
            
        ruleExplanationParent.appendChild(ruleExplanation);
    }
