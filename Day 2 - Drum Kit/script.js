
   function playSound(keyboardEvent){ //console.log(keyboardEvent.keyCode); 
    const audio = document.querySelector(`audio[data-key= "${keyboardEvent.keyCode}"]`);
    const key = document.querySelector(`.key[data-key= "${keyboardEvent.keyCode}"]`);
    console.log(audio)
    if(!audio) {
        return;// stops function if its not an audio key
    }
    audio.currentTime = 0//replays key even if already in action (allows for repeat functionality per button without having to wait for the sound to finish)
    audio.play();
    key.classList.add('playing')//adds the playing CSS class to the key when selected.  same as pseudo class in CSS
}
function removeTransition(keyboardEvent) {
    if(keyboardEvent.propertyName !== 'transform') return;
    this.classList.remove('playing');
    console.log(keyboardEvent.propertyName);
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound);
