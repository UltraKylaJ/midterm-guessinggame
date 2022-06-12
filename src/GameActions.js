import React from 'react';

// Create a function that is called when the user clicks the "Guess" button. 
// This function should:
    // Check if the user's guess is the same as the lucky number. If it is, 
        // display a message that congratulates the user (e.g. "You guessed the Lucky 
        // Number!")
    // If the user's guess is higher than the lucky number, display a message 
        // that says "Your guess is too high!"
    // If the user's guess is lower than the lucky number, display a message 
        // that says "Your guess is too low!"
    // Increment the number of guesses the user has made by 1
    // You might want to use another state variable to represent the message/hint 
        // that should be displayed to the user based on their guess.

function GameActions(props) {
    // Guess and Reset Buttons
    // function guess() {
    //     // called onClick of the Guess button
    //     // checks that currentguess/userGuess() === luckyNum
    //     // displays goldilocks message
    //     // increments the guesses/userGuesses() by 1
    //     // use useState variable to represent goldilocks message
    // }

}

export default GameActions


// when the user guesses and it matches the guess use ===
// when it doesn't match use !== and then feed into another if/else
// use if/else/else or if/if/else for the matching
// before any guesses, it is null