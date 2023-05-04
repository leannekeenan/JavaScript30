
/*
Objectives

// hides controls
// button for pause
// and play
// volume slider
// speed slider
// skip button Forward
// skip Back
*/
/*step #1:get the elements from the HTML document that are a part of the video playback div, and the player iteslf*/
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelector('player__slider');



/*step #2: create corresponding functions for the player features above*/
function togglePlay() {
    if(video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
}
//this function toggles between the player pausing and playing the video

function updateButton() {
    const icon = this.paused ? '►' : '❚❚' ;
    //can use 'this' because it is bound to the video itself.  If the icon is 'this.paused the play button will be set to appear in the textContent of the toggle button(to continue playing). Else the pause button will appear(illustrating that the video is playing and can eb paused by clicking the button)
    toggle.textContent = icon;
}
//this function changes the play button to pause when the video is playing and play when the video is paused

function skip() {
    //console.log(this.dataset.skip) will print the seconds skipped to the console
    video.currentTime += parseFloat(this.dataset.skip);
}
//this function allows for the video to be moved forward or back by a set number of seconds stated in the HTML

function handleRangeUpdate() {
    video[this.name] = this.value;
    console.log(this.name);
    console.log(this.value);
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video,currentTime = scrubTime;
    console.log(e);
}




/*step #3: connect event listeners to the togglePlay function*/

video.addEventListener('click', togglePlay);
//video.addEventListener('click', togglePlay) starts/stops video when the video itself is clicked

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
//both the 'play' and 'pause' event listeners listen for ehrn the video is baused and modify the play button to show that the video is playing or paused
video.addEventListener('timeUpdate', handleProgress);
toggle.addEventListener('click', togglePlay);
//toggle.addEventListener('click', togglePlay) starts/stops video when play button (►) is clicked

skipButtons.forEach(button => button.addEventListener('click', skip));
//skipButtons.forEach(button => button.addEventListener('click', skip) adds the skip fucntion to the 'data-skip' objects from the HTML.  This fast fowards the video by 25 second and rewinds 10


//ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
//ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false; //flag variable (set to false, and when clicked, is true)
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', () => {
    if(mousedown) {
        scrub();
    }
})
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
