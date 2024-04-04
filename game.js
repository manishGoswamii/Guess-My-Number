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

function disableCheckButton()
{
    checkButton.classList.add("disable-pointer-events");
    checkButton.disabled = true;

}
function enableCheckButton()
{
    checkButton.disabled=false;
    checkButton.classList.remove("disable-pointer-events");
}
function disableMainInput()
{
    mainInput.disabled=true;
    mainInput.classList.add("disabled-blur");
    mainInput.classList.add("disable-pointer-events");

}

function enableMainInput()
{
    mainInput.disabled=false;
    mainInput.classList.remove("disabled-blur");
    mainInput.classList.remove("disable-pointer-events");

}


let limit = 20;
function check() {
    
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
        disableCheckButton();
        disableMainInput();
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
        displayedText.classList.add("smaller_font");
        displayedText.textContent=`Out of chances. Lost!
        Press "Again" to restart`;    
        displayNumber.textContent=randomNumber;
        disableCheckButton();
        disableMainInput();
    }
    // prompt(numberFromUser + "  " + randomNumber);
}

function checkForKeydown(e)
{   
    if(e.key==="Enter")
    {   
        if(mainInput.classList.contains("invalid-input"))
        {
            return;
        }
        if(mainInput.value==="")
        {
                return;
        }
        check();
    }
    
}
checkButton.addEventListener("click", check );
mainInput.addEventListener("keydown", checkForKeydown);



againDiv.addEventListener("click",()=>
{   
    enableMainInput();
    score.textContent=20;
    body.classList.remove("win-background--body");
    mainInput.classList.remove("win-background--input");
    mainInput.classList.remove("invalid-input");
    mainInput.value = "";

    displayNumber.textContent="?";
    currentStatus.textContent = "Start Guessing....";
    randomNumber = Math.floor(Math.random() * 21);
    displayedText.textContent=`Guess My Number!`;
    displayedText.classList.remove("smaller_font");
    limit=20;
    
});