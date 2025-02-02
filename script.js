const input = document.querySelector('input'),
    guessingTip = document.querySelector('.guessing-tip'),
    checkBtn = document.querySelector('button')
    chancesRemain = document.querySelector('.chances-Remain');


// https://www.w3schools.com/jsref/dom_obj_text.asp
// Set the focus on the input field -> Input Text focus() Method : Give focus to a text field
input.focus();

// Generate a random number and set the chances variable to 10 (the max no. of chances)
let randomNum = Math.floor(Math.random() * 100);
let chances = 10;


// Listen for the click event on the check button
checkBtn.addEventListener('click', () => {
    // Decrement the chance variable on every click
    chances--;

    // Get the value from the input field
    let inputValue = input.value;

    // Check if the input value is equal to the random number
    if(randomNum == inputValue){
        if(input.disabled === true){
            // if we already 
        }
    // Update guessed number, disable input, check button text and color.
        [guessingTip.textContent, input.disabled] = ['Congratulations 🥳! You guessed it', true];
        [checkBtn.textContent, guessingTip.style.color] = ["Replay", "#333"];

        // ! we need to click Replay for chances times till chances becomes zero, only then it will reload the page.
        //* so update chances to value below zero here only or to 0 so that on clicking it page reloads.
    }

    // Check if input value is > random number and within 1-99 range.
    else if(inputValue > randomNum && inputValue < 100){
        // our randomNum value is below 100, so if inputValue is higher than it, then it might be higer than 100 and for that we will separately handle the condition for invalid input.

        // Update the guess text and remaining chances
        [guessingTip.textContent, chancesRemain.textContent] = ['Your guess is HIGH 🔺', chances];
        guessingTip.style.color = "#333";
    }

    //Check if input value is < random number and within 1-99 range.
    else if(inputValue < randomNum && inputValue > 0){
        // our randomNum value is above 0, so if inputValue is lesser than it, then it might be lesser than 0 and for that we will separately handle the condition for invalid input.

        // Update the guess text and remaining chances
        [guessingTip.textContent, chancesRemain.textContent] = ['Your guess is LOW 🔻', chances];
        guessingTip.style.color = "#333";
    }
    
    // If the input value is not within the range of 1 to 99
    else {
        // Update the guessed number text, color and remaining chances
        [guessingTip.textContent, chancesRemain.textContent] = ["Your number is invalid", chances];
        guessingTip.style.color = "#DE0611";
    }

    //if chances are over i.e. when it becomes zero
    if(chances == 0){
        //Update check button, disable input, and clear input value.
        // Update guessed number text and color to indicate user loss.
        [checkBtn.textContent, input.disabled, inputValue] = ["Replay", true, ""];
        [guess.textContent, guess.style.color] = ["You lost the game", "#DE0611"];
    }

    if (chances < 0) {
        // when chances become 0 replay text appear on btn and when user clicks on it chances will become -1, then this if block is execute and the page reloads and game is reset... 
        window.location.reload();
    }
});



