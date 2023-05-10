const timeNodes = Array.from(document.querySelectorAll('[data-time'));

const seconds = timeNodes
                    .map(node => node.dataset.time)
                    .map(timeCode => {
                        const [mins, secs] = timeCode.split(':')
                                                .map(function(string) {
                                                    return parseFloat(string)
                                                });
                                                //you can also use .map(parseFloat) and avoid the function call
                        return (mins * 60) + secs;
                        console.log(mins, secs)
                    }).reduce((total/*accumulator */, videoLength/*startingValue*/) => total + videoLength);

let secondsLeft = seconds;
let hours = Math.floor(secondsLeft / 3600)
secondsLeft = secondsLeft % 3600;//returns how many seconds are left 
let mins = Math.floor(secondsLeft / 60 )
secondsLeft = secondsLeft % 60;

    
console.log(hours, mins, secondsLeft)