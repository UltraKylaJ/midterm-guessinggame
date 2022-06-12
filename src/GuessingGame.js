import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GameActions from './GameActions';

// Create a new Function Component called GuessingGame that renders the following:
    // A message that says "I am thinking of a number between 1 and 100. Guess 
        // the Lucky Number!"
    // A form with an input for the user's guess and a "Guess" button to submit
    // A paragraph that says "You have made 0 guesses," and displays the number 
        // of guesses the user has made
    // A paragraph that displays a message to the user indicating whether the 
        // user has guessed correctly, too high, or too low
    // A "Reset" button that resets the game by picking a new number to guess 
        // and resetting the number of guesses back to 0



function GuessingGame(props) {

    function getLucky() {
        let luckyNum = Math.floor(Math.random() * 101);
        return luckyNum;
    }
    
    let message = "I am thinking of a number between 1 and 100. Guess the Lucky Number!"

    return (
        <Form>
            <Form.Group className='mb-3' >
                <Form.Label>{message}</Form.Label>
                <Form.Control type='text' />
            </Form.Group>
            <Button type='submit'>Guess</Button>
            <Form.Group className='mb-3' >
                <p>You have made {GameActions.guesses} guesses.</p>
                <p>You guessed {GameActions.goldilocks}</p>
            </Form.Group>
            <Button type='reset'>Reset</Button>
        </Form>
    )
}

export default GuessingGame