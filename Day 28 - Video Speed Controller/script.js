const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar')
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', function(event) {
    //console.log(event)//shows coords of mousemove on slider
    //get total height of slider
    const y = event.pageY - this.offsetTop;//cant assume the bar will always be at the top
    //console.log(y)
    //turn object 'y' into a percentage
    const percent = y / this.offsetHeight;
    //console.log(percent)
    //get min and max
    const min = 0;
    const max = 4;
    //set height
    const height = Math.round(percent * 100) + '%';
   
    bar.style.height = height;
    //console.log(height);

    //update number within bar
    const playbackRate = percent * (max - min) + min;
    bar.textContent = playbackRate.toFixed(1) + 'x';
    console.log(playbackRate.toFixed(2));

    //apply playbackRate to video
    video.playbackRate = playbackRate

    
});