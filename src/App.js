import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import GuessingGame from './GuessingGame';
import usePersistence from './usePersistence';

function App() {
  // const [luckyNum, getLucky] = useState(0)
  // const [currentGuess, userGuess] = useState(null)
  // const [guesses, userGuesses] = useState(null)

  // function resetButton() {
  //   getLucky(Math.floor(Math.random() * 101));
  // }

  // function guessButton(newGuess) {
  //   userGuess(newGuess)
  // }

  // function numberOfGuesses(guessesNum) {
  //   userGuesses(guessesNum)
  // }

  return (
    <Stack gap={3} className="col-md-10 mx-auto">
      <GuessingGame />
    </Stack>
  );
}

export default App;
