import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './GuessingGame.module.css';

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


    function guessSubmitted(event) {
        event.preventDefault();
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
        let luckyNum = Math.floor(Math.random() * 101);

        localStorage.setItem("luckyNumber", JSON.stringify(luckyNum));

        return luckyNum;
    }

    function updateGuess(event) {
        userGuess(event.target.value)
    }
    
    function resetButton() {
        getLuckyNumber();
        setMessage("Start guessing!");
        setGuesses(0);
    }
    
    return (
        <Form>
            <Form.Group className='mb-3' >
                <p className={styles.center}>"I am thinking of a number between 1 and 100. Guess the Lucky Number!"</p>
                <Form.Control type='number' className={styles.center} onChange={updateGuess} placeholder="Enter Guess" />
            </Form.Group>
            <div className={styles.center} >
                <p>You have made {guesses} guesses.</p>
                <p>{goldilocks}</p>
            </div>
            <div className={styles.container}>
                <Button className={styles.btn} type='submit' onClick={guessSubmitted} >Guess</Button>
                <Button className={styles.btn} type='reset' onClick={resetButton}>Reset</Button>
            </div>
            
        </Form>
    )
}

export default GuessingGame