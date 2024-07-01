let input  = document.getElementById('input')
const btn = document.getElementById('btn')
const wrng = document.getElementById('Ans')
const guesses = document.getElementById('numberofGuesses')
const playagn = document.getElementById('playbtn')


let answer = Math.floor(Math.random()*100)+1;


let numberofGuesses = 0;
btn.addEventListener('click',()=>{
GuessNumber();
console.log(input.value)
})

playagn.addEventListener('click',()=> {
    playagain();
})
function GuessNumber(){
    if(input.value<1 || input.value>100  ){
        wrng.innerText = 'Enter Number Between 1 to 100 '
        guesses.innerText = `The Number of Guesses : ${numberofGuesses}`;
    } 
    else if(input.value>answer){
        wrng.innerText = 'The Answer is too high'
        numberofGuesses++;
        guesses.innerText = `The Number of Guesses : ${numberofGuesses}`;

    }    
    else if(input.value<answer){
        wrng.innerText = 'The Answer is too low'
        numberofGuesses++;
        guesses.innerText = `The Number of Guesses : ${numberofGuesses}`;

    }  
    else{
        wrng.innerText = `CONGRATULATIONS Your guess was correct the answer is ${answer}`
        guesses.innerText = `The Number of Guesses : ${numberofGuesses}`

    }                                                                                                     
}

function playagain(){
    answer = Math.floor(Math.random()*100)+1;
    numberofGuesses = 0; 
     wrng.innerText = ''
     guesses.innerText = `Number of guesses : ${numberofGuesses}`;
}
