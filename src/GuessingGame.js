import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GameActions from './GameActions';

// Create a new Function Component called GuessingGame that renders the following:

    // A form with an input for the user's guess and a "Guess" button to submit
    // A paragraph that says "You have made 0 guesses," and displays the number 
        // of guesses the user has made
    // A paragraph that displays a message to the user indicating whether the 
        // user has guessed correctly, too high, or too low
    // A "Reset" button that resets the game by picking a new number to guess 
        // and resetting the number of guesses back to 0



function GuessingGame(props) {
    // const [luckyNum, getLucky] = useState(null)
    // const [currentGuess, userGuess] = useState({ num: "" })
    // const [guesses, userGuesses] = useState(null)
    // const [goldilocks, guess] = useState(null)

    

    // function userGuesses(guesses) {
    //     console.log(guesses)
    // }

    function getLucky() {
        let luckyNum = Math.floor(Math.random() * 101);
        // console.log(luckyNum)
        return luckyNum;
    }

    function guess() {
        const [guesses, setGuesses] = useState(0)

        function userGuesses(event) {
            () => setGuesses(guesses + 1)
        }

        if (currentGuess === luckyNum) {
            return (
                goldilocks = "Congrats! You guessed it!"
            );
        } else if (currentGuess > luckyNum) {
            return (
                goldilocks = "Sorry, your number is too high."
            );
        } else {
            return (
                goldilocks = "Sorry, your number is too low."
            );
        }

        // called onClick of the Guess button
        // checks that currentguess/userGuess() === luckyNum
        // displays goldilocks message
        // increments the guesses/userGuesses() by 1
        // use useState variable to represent goldilocks message
    }
    
    return (
        <Form>
            <Form.Group className='mb-3' >
                <Form.Label>"I am thinking of a number between 1 and 100. Guess the Lucky Number!"</Form.Label>
                <Form.Control type='number' />
            </Form.Group>
            <Button type='submit' onClick={guess}>Guess</Button>
            <Form.Group className='mb-3' >
                <p>You have made {guess.userGuesses} guesses.</p>
                <p>You guessed {goldilocks}</p>
            </Form.Group>
            <Button type='reset' onClick={getLucky}>Reset</Button>
        </Form>
    )
}

export default GuessingGame