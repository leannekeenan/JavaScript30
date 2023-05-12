/*speech recognition is a global variable that lives in thr browser*/
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//crate a new instance of speech recognition
const recognition = new SpeechRecognition();
//take recognition and set interim results
//lets page populate while sepaking rather that after
recognition.interimResults  = true;
//create a paragraph
let p = document.createElement('p');
//get words class from dom
const words = document.querySelector('.words');
//use words and append child, p, which will be what we put in the DOM while we work with it
words.appendChild(p);
//add event listener
recognition.addEventListener('result', event => {
    console.log(event.results)
    //takes console result transcript and makes it a string
    //map over result to get the first value in each console loged result. map it again to get array results of the transcript
     //join the array values together
    const transcript = Array.from(event.results).map(result => result[0]).map(result => result.transcript).join('');
    //print the console ltect to the document p
    p.textContent = transcript;
    //create an if statement to determine if statement is final
    if(event.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }

    const question = transcript.replace('question mark', '?');
    p.textContent = question;


    
    //print the transcript array to the console
    console.log(transcript);



});

//create a second event listener for the end event
recognition.addEventListener('end', recognition.start);

recognition.start();

/*

const question = transcript.replace('question mark', '?');
*/