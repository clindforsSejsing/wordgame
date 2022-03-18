import React, { useState } from "react";
import { FilterRandomWord } from "./components/FilterRandomWord";
import { Keyboard } from "./components/Keyboard";
import { LettersFromUser } from "./components/LettersFromUser";
import { WrongWordsList } from "./components/WrongWordsList";
import Winnings from "./components/Winnings";

// const randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

const App = () => {
  // const [secretword, setSecretword] = useState(randomWord);

  return (
    <div className="App">
      <h1>Wordgame</h1>
      <FilterRandomWord />
      <Winnings />
      <LettersFromUser />
      <Keyboard />
      <WrongWordsList />
    </div>
  );
};

export default App;
