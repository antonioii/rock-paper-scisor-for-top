const playButton = document.querySelector('.play');
playButton.addEventListener('click', startChoices, {once:true});

function startChoices(){
    document.querySelector('h1').textContent = "Make your choice";
}
