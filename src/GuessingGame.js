import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


// Create a new Function Component called GuessingGame that renders the following:

    // A paragraph that says "You have made 0 guesses," and displays the number 
        // of guesses the user has made
    // A paragraph that displays a message to the user indicating whether the 
        // user has guessed correctly, too high, or too low
    // A "Reset" button that resets the game by picking a new number to guess 
        // and resetting the number of guesses back to 0



function GuessingGame(props) {
    const [luckyNum, setLucky] = useState(null)
    const [currentGuess, userGuess] = useState("")
    const [guesses, setGuesses] = useState(null)
    const [goldilocks, setMessage] = useState("Start guessing!")


useEffect(() => {
        if (luckyNum === null) {
            setLucky(
                JSON.parse(localStorage.getItem("luckyNumber")) || getLuckyNumber()
            )
        }
        if (guesses === null) {
            setGuesses(
                JSON.parse(localStorage.getItem("timesGuessed")) || 0
            )
        }
}, [])


    function guessSubmitted() {
        let parsedGuess = parseInt(currentGuess)

        if ( parsedGuess === luckyNum) {
            setMessage("Congrats! You guessed it!")
        } else if ( parsedGuess > luckyNum) {
            setMessage("Sorry, your number is too high.")
        } else {
            setMessage("Sorry, your number is too low.")
        }

        setGuesses(guesses + 1)
        localStorage.setItem("timesGuessed", JSON.stringify(guesses + 1))
    }


    function getLuckyNumber() {
        let luckyNum = Math.floor(Math.random() * 100);

        localStorage.setItem("luckyNumber", JSON.stringify(luckyNum));

        return luckyNum;
    }

    function updateGuess(event) {
        if (isNaN(event.target.value)) {
            alert("hey type in a number")
        } else {
            userGuess(event.target.value)
        }
    }
    
    function resetButton() {
        this.onLucky(luckyNum)
    }
    
    return (
        <Form>
            <Form.Group className='mb-3' >
                <Form.Label>"I am thinking of a number between 1 and 100. Guess the Lucky Number!"</Form.Label>
                <Form.Control type='number' onChange={updateGuess} placeholder="Enter Guess" />
            </Form.Group>
            <Form.Group className='mb-3' >
                <p>You have made {guesses} guesses.</p>
                <Button type='submit' onClick={guessSubmitted} >Guess</Button>
                <p>{goldilocks}</p>
            </Form.Group>
            <Button type='reset' onClick={resetButton}>Reset</Button>
        </Form>
    )
}

export default GuessingGame