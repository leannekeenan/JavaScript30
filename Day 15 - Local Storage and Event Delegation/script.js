/*
local storage & event delegation
 the program allows the user to check, uncheck, and add items to a form element

 what is needed from the doc:
  - the form object where items are added to the list by the user
  - the list where those items are loaded into
  - an empty array to store the user inputs and the items click status
*/

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.tapa-type');

//items tries to get data from local storage.  If nothin is there, an empty array is returned.  Makes it populated on page load (now persistant - wont refresh)
const items = JSON.parse(localStorage.getItem('items')) || [];


//the function addItem accepts an event as its parameter
function addItem(e) {
  //prevent page from reloading the event (this is a client-side only app)
  e.preventDefault();  

  //declare an object called text
  //use'.this' s with a querySelector to connect to the form by proxy [e -> addItem -> addItems].  
  //set the 'this.' to have the name equal the item within a query selector.  
  //Wrap the 'this.' in parenthesis and call the .value against it to get the property of the input called value (what the user has typed in there)
  const text = (this.querySelector('[name=item]')).value;

  //set an item within the function equal to have property:value pairs
  const item = {
    //text is the name written in the input box
    text: text,
    //done sets the checked default state to unchecked
    done: false
  };

  //take the item from line 31 and put it into the items array
  items.push(item);

  //initialize populateList (pass the list of items and the items list)
  populateList(items, itemsList);
  
  //to push data to local storage, create a setItem with the key items (line 13) as the first parameter. he second will be the items object convreted into a JSON string.  this will store a key: value pain in local storage
  localStorage.setItem('items', JSON.stringify(items))

  //clear the input
  this.reset();
};

//the function populateList will create the HTML
//tapaTypes set to empty array to cover egde case where nothing is entered into the user input
//takes in object, returns string ``
function populateList(tapaTypes = [], tapaTypeList) {
  tapaTypeList.innerHTML = tapaTypes.map((tapaType, index) => {
    return `
    <li>
    <input type="checkbox" data-index=${index} id="item${index}"
    ${tapaType.done ? "checked" : ''}
    >
      <label for="item${index}">${tapaType.text}</label>
    </li>
    `
    //use .join to remerge .map array into a string
  }).join('')
}

//create a function that will toggle on and off the checkboxes after page refresh
//the function passes an event as a parameter
function toggleDone(e) {
   //check if target matches what we are looking for
  if (!e.target.matches('input')) return; // skip this unless it's an input
  const el = e.target;
  //go to items array and find teh one that was checked and set done to true
  //place el.dataset i its own variable
  const index = el.dataset.index;//why theres a data-index on the objects
   //take items with the index, access the done property, and set to inverse of itself
   
  items[index].done = !items[index].done;//change property
  localStorage.setItem('items', JSON.stringify(items));//store in localStorage
  populateList(items, itemsList);//update list
}

//the form input object with the type 'submit' will listen for a submit event. When actioned, it will run the function'addItem'

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);