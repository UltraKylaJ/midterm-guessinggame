import React from 'react';
import Stack from 'react-bootstrap/Stack';
import GuessingGame from './GuessingGame';

function App() {
  return (
    <Stack gap={3} className="col-md-10 mx-auto">
      <GuessingGame />
    </Stack>
  );
}

export default App;
