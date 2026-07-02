let randomNum= parseInt((Math.random()*10) + 1)

const submit= document.querySelector('#subt')
const userInput= document.querySelector('#guessField')
const guessLot= document.querySelector('.guesses')
const remaining= document.querySelector('.lastResult')
const loworHi= document.querySelector('.lowOrHi')
const startOver= document.querySelector('.resultParas')

const p= document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame= true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess= parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    //checks val is valid 
    if(isNaN(guess) || guess<1 || guess>100){
        alert(`Please add a valid number ${guess}`);
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMsg(`Game Over. Random number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // checks whether the guess is equal to random
    if(guess===randomNum){
        displayMsg(`You guessed it right!`)
        endGame()
    }else if(guess<randomNum){
        displayMsg(`Number is TOO low`)
    }else{
        displayMsg(`Number is TOO high`)
    }
}

function displayGuess(guess){
    // display if correct match is found
    userInput.value= ''
    guessLot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML= `${11-numGuess}`
}

function displayMsg(msg){
    //display the message 
    loworHi.innerHTML= `<h2>${msg}</h2>`;
}

function endGame(){
    //
    userInput.value=''
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML= `<h2 id="newGame"> Start new Game</h2>`;
    startOver.appendChild(p)
    playGame= false
    newGame()
}

function newGame(){
    //
    const newGameButton= document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNum= parseInt((Math.random()*10) + 1)
        prevGuess= []
        numGuess=1
        guessLot.innerHTML=''
        remaining.innerHTML= `${11-numGuess} `;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame= true
        
    })

}




