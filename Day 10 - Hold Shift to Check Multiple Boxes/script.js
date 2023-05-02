/*build a function that allows you to click a checkbox item, hold down the 'shift button' and when clicking another checkbox option, all options between the first and last checbox item is checked off and crossed out*/

//step one: select every single all of the checkboxes in the document
const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');

//step two: add event listener to check *for* when *each* one of the checkboxes gets clicked/changes, a function to handle what happens after a checkbox has been clicked runs 
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
/*this function will loop over each of the checkboxes inside of 'inbox', passing each 'checkbox' as an individual parameter.  The function will listen for a click event on each individual checkbox.  If a click is heard, the function 'handleCheck' will execute on the checkbox */


//step three: create the function that listens for the event click on a checkbox and returns said event to the console
function handleCheck(event) {
  //step five: create an 'inBetween' variable that will loop over every checkbox in the inbox and return true for all checkboxes that have been checked (identifies where the area where all check boxes need to be checked)
  let inBetween = false;
  //step four: check to see if the 'shift key' is being held down and theres a check
  if(event.shiftKey && this.checked) {
    //loops theough each checkbox and look for the first one that was checked and check all the way down to the last one checked
    //step six: loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox)
      /*step seven: when shift is held down, all nine checkboxes are returned in the console*/ 
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;//this is a flag variable
        console.log('starting to check inbetween')
      }
      /*step eight: to change the value of inBetween to true, create an if statement that sets the condition for if the checkbox is equal to 'this' or lastChecked, then the variable inBetween wil be set to the opposite of itself
      
      so...
      
      if the checkbox is equal to 'this', checkbox, 
      */
      if(inBetween) {
        checkbox.checked = true
      }
    })
  }
  lastChecked = this;
}

let lastChecked;
/*lastChecked is where we need to set the check event into a variable

why?
because after holding shift and clicking the second checkbox, the location of the first box needs to be provided
*/



/*
WHAT IS A FLAG VARIABLE??
Flag variable is used as a signal in programming to let the program know that a certain condition has met. It usually acts as a boolean variable indicating a condition to be either true or false
*/