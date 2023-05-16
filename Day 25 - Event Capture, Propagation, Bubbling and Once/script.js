const divs = document.querySelectorAll('div');
const button = document.querySelector('button');/*if you only want it clicked once ...*/

function logText(event) {
    //console.log(this)
    console.log(this.classList.value)
    event.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,//false is default
    once: true
}))




/*bubbling: triggers events going down a nested group

where the browser will figure out what you clocked on but will also trigger clicks on the element it is nested in*/


/*capture: when an element is clicked it ripples down nested elements */

/*propigation: stopps bubbling up*/

/*once:listens for a click once and unbinds itself so there are no future clicks on it - same as div.removeEventListener('click', logText, capture ? boolean);*/

/*... */button.addEventListener('click', () => {
    console.log('Click')
}, {
    once: true
})