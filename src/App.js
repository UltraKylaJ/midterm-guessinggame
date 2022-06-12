import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import GuessingGame from './GuessingGame';

function App() {
  const [luckyNumber, getLucky] = useState()
  const [currentGuess, userGuess] = useState()
  const [guesses, userGuesses] = useState(null)

  // getLucky() {
  //   //
  // }

  // userGuess() {
  //   //
  // }

  // userGuesses() {
  //   //
  // }

  return (
    <Stack gap={3} className="col-md-10 mx-auto">
      <GuessingGame />
    </Stack>
  );
}

export default App;
