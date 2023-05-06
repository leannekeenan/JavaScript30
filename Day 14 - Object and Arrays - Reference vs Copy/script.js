 // start with strings, numbers and booleans
 let age = 100;
 age2 = age;
 //console.log(age, age2)
 
 age = 200;
 //console.log(age, age2)//age = 200, age2 = 100 because the value of age goes into the variable at the same time
 
 
 let name = 'Leanne'
 name2 = name;
 //console.log(name, name2)
 name = 'Adam &'
 //console.log(name, name2)
 
 
     // Let's say we have an array
     const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
 
     // and we want to make a copy of it.
     const team = players;
     console.log(players, team);
 
 
     // You might think we can just do something like this:
     //team[3] = 'Lux';
     //because team was updated, but team is not the array, team is a reference to the array players 

     //when you edit the orignal array or when you update any of the arrays, it goes back to the reference where it was (not the same as the above examples of 'age' and 'name')

     //if you update an array it will always reference nack
     
 
     // however what happens when we update that array?
 
     // now here is the problem!
 
     // oh no - we have edited the original array too!
 
     // Why? It's because that is an array reference, not an array copy. They both point to the same array!
 
     // So, how do we fix this? We take a copy instead!

     //make a copy of an array
     const team2 = players.slice()
     //if you pass nothing through slice it will take a copy of the array

     //reassigning an array value will change only for team2 but players will remain the same
     /*
     players
(4) ['Wes', 'Sarah', 'Ryan', 'Poppy']
team2
(4) ['Wes', 'Sarah', 'Ryan', 'Poppy']
team2[3] = 'Lux';
'Lux'
team2
(4) ['Wes', 'Sarah', 'Ryan', 'Lux']
players
(4) ['Wes', 'Sarah', 'Ryan', 'Poppy']
      */
;
    //you can also concatinate the orignal array to a blank array to get the same result (untoughed orignal and a modified array copy)
    const team3 = [].concat(players);
     // one way
 
     // or create a new array and concat the old one in
 
     // or use the new ES6 Spread
     const team4 = [...players];
     team4[3] = 'Marcus';
     console.log(team4)
     //the spread [...] will take every item out of the iterable and put it into its containing array and spreads into a function as well

     const team5 = Array.from(players)

 
     // now when we update it, the original one isn't changed
 
     // The same thing goes for objects, let's say we have a person object





 
     // with Objects
     const person = {
       name: 'Wes Bos',
       age: 80
     };
 
     // and think we make a copy:
     //const captain = person; //doesn't work
     /*if you change the captains number to 90, the  object changes because another value has been added*/
     //captain.number = 90;//this is a reference, not a copy

     // how do we take a copy instead?

     //use Object.assign
     const captain2 = Object.assign([], person, {number: 99, age: 12});//start with a blank array and pass the object you want to copy properties from, and in {}, enter your property value pairs and place it in its own variable
     console.log(captain2)

     // We will hopefully soon see the object ...spread
     //const captain3 = {...person}
     // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

     const leanne = {
        name: "Leanne",
        age: 35,
        social: {
            twitter: 'leannekeenan1',
            facebook: 'Leanne Keenan'
        }
     }

     console.clear();
     console.log(leanne)

     const dev = Object.assign([], leanne)

     //object.assign only goes one level deep.  If you need a clone object, use function cloneDeep() (find on internet)
     const dev2 = JSON.parse(JSON.stringify(leanne))//gives full copy of the passed in object for a deeper clone.  Take JSON.stringify and pass it an object and that will return to you a string that is no longer an object.  Parsing will turn it back into an object