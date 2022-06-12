import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import GuessingGame from './GuessingGame';

function App() {
  const [luckyNum, getLucky] = useState(null)
  const [currentGuess, userGuess] = useState(null)
  const [guesses, userGuesses] = useState(null)

  function resetButton(luckyNum) {
    getLucky(luckyNum);
  }

  function guessButton(currentGuess) {
    userGuess(currentGuess)
  }

  function numberOfGuesses(guesses) {
    userGuesses(guesses)
  }

  return (
    <Stack gap={3} className="col-md-10 mx-auto">
      <GuessingGame onLucky={resetButton} onGuess={guessButton} onGuesses={numberOfGuesses} />
    </Stack>
  );
}

export default App;
