
//msg: create new speech synthesis utterance (what user is going to say) 
const msg = new SpeechSynthesisUtterance();
//voices: empty array where the voice will be held
let voices = [];
//voicesDropdown: shows voice type options
const voicesDropdown = document.querySelector('[name="voice"]');
//options: rate, pitch and text in a single object
const options = document.querySelectorAll('[type="range"], [name="text"]');
//starts text
const speakButton = document.querySelector('#speak');
//stops text
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

/*in console, append .speak on global variable SpeechSynthesis and add msg (voice over will speak)*/

function populateVoices() {
    voices = this.getVoices()
    console.log(voices)

    //loop over voices
    const voiceOptions = voices
        .map(voice => `<option value="${voice.name}">${voice.name}(${voice.lang}</option>`)
        .join('');
        voicesDropdown.innerHTML = voiceOptions
}
//can add .filter(voice => voice.includes('en)) to get back only english voices

//choose from the dropdown list voices
function setVoice() {
    msg.voice = voices.find(voice =>voice.name === this.value)
    toggle();
}

//start speech over when new voice is choosen
function toggle(startOver = true) {
    speechSynthesis.cancel()

    if(startOver) {
        speechSynthesis.speak(msg);
    }
}

function setOption() {
    console.log(this.name, this.value)
    msg[this.name] = this.value;
    toggle();
}

//populate voices
speechSynthesis.addEventListener('voiceschanged', populateVoices)

//change voice option
voicesDropdown.addEventListener('change', setVoice)

//
options.forEach(option => option.addEventListener('change', setOption))

//listen for button clicks
speakButton.addEventListener('click', toggle)
stopButton.addEventListener('click', () => {toggle(false)})

