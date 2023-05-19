//select items
//listen for events clicking down, where you clicked, moving left and right

const slider = document.querySelector('.items');

let isDown = false//
let startX;//values assigned in event
let scrollLeft;//values assigned in event



slider.addEventListener('mousedown', (event) => {
    isDown = true; 
    slider.classList.add('active');
    //determine mouse anchor point (initial click down) [startX] 
    startX = event.pageX - slider.offsetLeft;
    //log scroll at time of click [scrollLeft]
    scrollLeft = slider.scrollLeft;
    //console.log(startX);
    
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active'); 
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active'); 
});
slider.addEventListener('mousemove', (event) => {
    if(!isDown) return;//stops the function from running.  Allow function only in click state
    event.preventDefault();
    ///find cursor after moved
    const x = event.pageX - slider.offsetLeft; 
    //console.log({x, startX});//x changes, startX remains the same
    //the difference between where x starts and changes to is called the 'walk
    const walk = x - startX;//for far we deviated from initial click
    /*you can wrap x - startX in walk and multiply by a number of pixels you would like the scroll to move the slider (if multiplied by 3 the slider moves every 3px instead of 1px) */
    console.log(walk);
    //change div to scroll with scrollLeft property
    slider.scrollLeft = scrollLeft - walk;

});
///find cursor after moved

