/*Antonio Sérgio - 10-09-2022*/
/*Rules Explanation Button*/

const ruleButton = document.querySelector('.rules');
let alreadyClicked = false;
ruleButton.addEventListener('click', activeRulesExplanation);

//function to check if a button is already clicked in order to remove or make the explanatory window
function activeRulesExplanation(){
    console.log(alreadyClicked);
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
            rulesParagraph.textContent = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";
            ruleExplanation.appendChild(rulesParagraph);
            
        ruleExplanationParent.appendChild(ruleExplanation);
    }
