const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }
/*
when you have JS running on the page but do not know what is causing it, this is how you find it:
1. inspect the element
2. find it in the dom
3. right click the element and select 'Break on'
4. in the dropdown of 'Break on', select 'attribute modifications'
   - this will add a debugger command (breakpoint) to the DOM in the 'sources'tab
5. click the element in the DOM again
   - this will populate a sources tab.
      + in this tab there is a 'scope' section which will
      show the attribute being modified
*/


/*
using console.


*/
    // Regular
//console.log('hello');

    // Interpolated
//console.log('Hello I am %s string!', 'interpolated');

    // Styled
//console.log("%c I am a sentence that had its font size changed in JS", 'font-size: 25px');
//console.log("%c I am a sentence that had its background  changed in JS", 'background: red');
//console.log('%c I am a sentence that had its background, font-size and text-shadow added in JS', 'background: green ; font-size: 20px; text-shadow: 5px 5px 0 blue');

    // warning!px;
//console.warn('OH NOOO!!!!'); //provides stack trace back to where the erroe was added in the code


    // Error :|
//displays error in the console
//console.error('well...shit)');


    // Info
//console.info('American flags left on the moon will eventually get bleached white by the sun');
    // Testing
//console.assert(1 === 1, 'that is wrong!')//only fires if wrong
//console.assert(1 === 0, 'that is wrong!')

    //advanced usage
const p = document.querySelector('p');
//console.assert(p.classList.contains('word'), 'incorrect');
//
//console.assert(p.classList.contains('word'), 'incorrect');
//
//console.assert(p.classList.contains("value: '' "), 'incorrect');
//
//console.log(p.classList)
    // clearing
console.clear()


    // Viewing DOM Elements
console.log(p)//'shows actual element'
console.dir(p)// shows element methods
    // Grouping together

console.clear()

dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} years old in dog years`);
  console.groupEnd(`${dog.name}`)
})

dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} years old in dog years`);
  console.groupEnd(`${dog.name}`)
})
    // counting
//counts the number of times a word is used
console.count('Leanne')
console.count('Leanne')
console.count('Leanne')

    // timing

//how long something takes
console.time('fetching data')
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data')
  console.log(data)
})


console.table(dogs)