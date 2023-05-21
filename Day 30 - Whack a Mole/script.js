/*
games 10 seconds long
 - the hole the mole pops up in is random
 - the amount of time is stays in the hole is random
 - molehole choosen is random
*/

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

//used to reduce chances of mole popping up in same hole
let lastHole;

//used to end game
let timeUp = false;

//used to set player score
let score = 0;

//function that gives random amount of time between hover minimum and maximum values
function randomTime(minimumTime, maximumTime) {
    return Math.round(Math.random() * (maximumTime - minimumTime) + minimumTime); //offset
}

//funtion to choose the random molehole
//"get me a random DOM element" function
function randomMolehole(holes) {
//console.log(holes.length)
//find a random index between zero and 5 (total of 6 indexes)
const moleholeIndex = Math.floor(Math.random() * holes.length);//offset
const hole = holes[moleholeIndex];// nodelist of hole elements
//if the hole is the same as the last hole, run the funciton again
if(hole === lastHole) {
    console.log('same hole!')
    return randomMolehole(holes);
}
//console.log(holes)//returns list
//console.log(hole);

lastHole = hole;//save reference to what hole a mole popped upin last time the function was ccalled
return hole;
}

//function to have mole pop out of molehole
function randomMole() {
    //times range for when mole is onscreen
    const time = randomTime(200, 1000);
    //which molehole will the mole come out of
    //console.log(time, hole)
    const hole = randomMolehole(holes)

    //adds CSS class up to get moles to pop up
    hole.classList.add('up');
    
    //removes class of 'up' to get the moles to go back down
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) {
            randomMole();
        }
    }, time);
}

//function to start the game 
function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    randomMole();
    //game timer
    setTimeout(() => timeUp = true, 10000);
}

//function for effect when mole is hit
function bonk(event) {
    console.log(event);
    if(!event.isTrusted) {
        return;
    }
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

//event listener for each mole when clicked
moles.forEach(mole => mole.addEventListener('click', bonk));
