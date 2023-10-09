const body = document.querySelector("body");
let numberFromUser; 
const highScore = document.querySelector(".current-highscore");
const score = document.querySelector(".current-score");
const currentStatus = document.querySelector(".main__status-text");
const displayNumber = document.querySelector(".number");
const mainInput = document.querySelector(".main__input");
const checkButton = document.querySelector(".main__check");
let randomNumber = Math.floor(Math.random() * 21);

const againDiv = document.querySelector(".header__again");

const displayedText = document.querySelector(".main__guess");

checkButton.disabled = true;
//Input validation code.
mainInput.addEventListener("input", function ()
{   
    const guessNumber = +mainInput.value;
    // console.log(typeof mainInput.value);
    
    if( isNaN(guessNumber) || guessNumber>20 || guessNumber<1)
    {
        checkButton.disabled = true; 
        mainInput.classList.add("invalid-input");
    }
    else 
    {
        checkButton.disabled = false;
        mainInput.classList.remove("invalid-input");


    }
    // console.log(typeof guessNumber);
    // console.log(guessNumber);

});


let limit = 20;

checkButton.addEventListener("click", function () {
    
    numberFromUser = +mainInput.value;
    if (randomNumber === numberFromUser) 
    {
        body.classList.add("win-background--body");
        mainInput.classList.add("win-background--input");
        displayNumber.textContent=randomNumber;
        currentStatus.textContent = "🔥 Correct Guess....";
        if(+score.textContent>(+highScore.textContent))
        {
            highScore.textContent=score.textContent;
        }
        
    }
    else
    {
        if (randomNumber > numberFromUser) 
        {
            currentStatus.textContent="🌡 Too Low";
        }
        else 
        {
            currentStatus.textContent=" 🚀 Too High";
        }
        score.textContent = +score.textContent - 1;
        limit--;

    }
    

    if(limit<1)
    {
        checkButton.disabled = true;
        displayedText.classList.add("smaller_font");
        displayedText.textContent=`Out of chances. Lost!
        Press "Again" to restart`;
        
        displayNumber.textContent=randomNumber;

    }
    // prompt(numberFromUser + "  " + randomNumber);
});


againDiv.addEventListener("click",()=>
{
    score.textContent=20;
    body.classList.remove("win-background--body");
    mainInput.classList.remove("win-background--input");
    mainInput.value = "";
    checkButton.disabled=true;
    displayNumber.textContent="?";
    currentStatus.textContent = "Start Guessing....";
    randomNumber = Math.floor(Math.random() * 21);
    displayedText.textContent=`Guess My Number!`;
    displayedText.classList.remove("smaller_font");
    limit=20;
    
});