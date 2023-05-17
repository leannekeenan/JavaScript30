//get triggers from cool class
const triggers = document.querySelectorAll('.cool > li')
//get dropdownBackground
const background = document.querySelector('.dropdownBackground');
//get nav
const nav = document.querySelector('.top');


function handleEnter() {
    this.classList.add('trigger-enter')//list item adds trigger-enter
    setTimeout(() => {//arrow function inherits from handleEnter
        //if stetement handles quick movements in and out of dropdowns
        if(this.classList.contains('trigger-enter')) {
            this.classList.add('trigger-enter-active');
        }
        
    }, 150)
    background.classList.add('open');

    //define dropdown
    const dropdown = this.querySelector('.dropdown')
    //console.log(dropdown)

    //get position coordinates from document
    const dropdownCoords = dropdown.getBoundingClientRect();
    //console.log(dropdownCoords)

    //determine the nav location coordinates
    const navCoords = nav.getBoundingClientRect();
    //console.log(navCoords)

    //determine coords for all above coordinates
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        /*fix coordination if pushed down by another external element by subtracting navCoords from top and left*/
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };
    //setProperty() for the width and height animation for the dropdown background
    background.style.setProperty('width', `${coords.width}px`)
    background.style.setProperty('height', `${coords.height}px`)

    //adjust top and left values
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)

}

function handleExit() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

//listen for when the mouse enters and exits and trigger each function
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleExit))


//part one: get content from dropdown showing nested ul

//figure how high, wide and where on the page is the dropdown?
//can the white div fit behind it

