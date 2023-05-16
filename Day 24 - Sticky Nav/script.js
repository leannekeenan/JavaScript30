//get the nav element
const nav = document.querySelector('#main');
//on page load, determine top of nav bar
const topOfNav = nav.offsetTop;

//create function that runs every time the page scrolls
function fixNav() {
    console.log(topOfNav)
    if(window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    }
    else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav)