
let exp = 0;
let hp = 100;

const expBar = document.querySelector('#expBar');
const hpBar = document.querySelector('#hpBar');
const actionVecht = document.querySelector('#action-vecht');
const actionHeal = document.querySelector('#action-heal');
const actionEvolve = document.querySelector('#action-evolve');
const pokemonImage = document.querySelector('#pokemon-image');


// Bron Audio: https://www.myinstants.com/en/instant/classic-pokemon-heal/
// Bron Code: https://stackoverflow.com/questions/9419263/how-to-play-audio
const audioHeal = new Audio('healAudio.mp3')
//-------

function increaseExp() {
    exp = (exp + 10);
    // ChatGPT
    // Prompt: Schrijf code die zorgt dat de expBar aanpast op basis van de variabele exp
    expBar.style.width = exp + '%'; 
    //-------
}

function decreaseHP() {
    hp = (hp - 20);
    // ChatGPT
    // Prompt: Schrijf code die zorgt dat de expBar aanpast op basis van de variabele hp
    hpBar.style.width = hp + '%';
    //-------

    if (hp === 0) {
        actionVecht.style.pointerEvents = 'none';
        actionHeal.style.pointerEvents = 'none';
        actionEvolve.style.pointerEvents = 'none';
    }
}

function increaseHP() {
    hp = 100;
    hpBar.style.width = hp + '%';
}

// Bron Code: https://stackoverflow.com/questions/9419263/how-to-play-audio
function playAudio() {
    audioHeal.play();
}
//------

function evolvePokemon() {
    if (exp >= 100) {
        pokemonImage.src = 'styles/gabite.png';
        console.log('Pokemon is geevolueerd')
    }
}

actionVecht.addEventListener('click', increaseExp)
actionVecht.addEventListener('click', decreaseHP)
actionHeal.addEventListener('click', increaseHP)
actionHeal.addEventListener('click', playAudio)
actionEvolve.addEventListener('click', evolvePokemon) 