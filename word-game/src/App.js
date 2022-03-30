import React, { useState } from 'react';
import { UserInput } from './components/UserInput.js';
import { FilterRandomWord } from './components/FilterRandomWord';
// import { LettersFromUser } from './components/LettersFromUser';
import { WrongWordsList } from './components/WrongWordsList';
// import Winnings from './components/Winnings';

const App = () => {
  return (
    <div className="App">
      <h1>Wordgame</h1>
      <FilterRandomWord />
      {/* <Winnings /> */}
      {/* <LettersFromUser /> */}
      <UserInput />
      <WrongWordsList />
    </div>
  );
};
//import highscorelist when its done
export default App;
