

//push e.key to array 
const pressed = [];

//set a sequence to look for
const secretCode = 'leanne';


window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)//starts from the back of the array and stops once the start of teh secret code has been found

    //check if array contains secret code
    if(pressed.join('').includes(secretCode)) {
        console.log('SECRET CODE')
        cornify_add();
    }
    console.log(pressed);
})