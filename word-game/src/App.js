import React, { useState } from 'react';
import { UserInput } from './components/UserInput.js';
import { UsedLettersFromUser } from './components/UsedLettersFromUser.js';
import { Words } from './components/Words';
import { Timer } from './components/Timer.js';
import { StartCta } from './components/StartCta.js';
// import { WrongWordsList } from './components/WrongWordsList';
// import Winnings from './components/Winnings';

const App = () => {
  // const [guesses, setGuesses] = useState([]);
  const [inputText, setInputText] = useState('');
  const [rightGuess, setRightGuess] = useState([]);
  const [answere, setAnswere] = useState('incorrect');

  //sätt gamestate till false när rätt ord gissats och timer bör även den sättas till false när den stannas
  const [game, setGame] = useState('false');

  // useEffect(() => {
  // console.log('saving');
  // localStorage.

  // },[guesses])
  // const gameHandler = () => {
  //   setGame('true');
  // };
  function secretWordsLetters(word) {
    setRightGuess(word);
  }

  function inputTextSetter(text) {
    //console.log('setting inputText to: ' + text);
    setInputText(text);
    setGame('true');
  }
  function correctWordSetter(answere) {
    setAnswere(answere);
  }
  //Sätta in kontroller i usedLetterfromUSer
  return (
    <>
      <div className="App">
        <h1>Wordgame</h1>
        <Words changeWord={secretWordsLetters} />
        <UsedLettersFromUser
          choosenLetters={inputText}
          rightGuess={rightGuess}
          answere={answere}
        />
        <UserInput inputText={inputText} changeText={inputTextSetter} />
        <StartCta
          buttonClick={inputTextSetter}
          inputText={inputText}
          rightGuess={rightGuess}
          correctWord={correctWordSetter}
        />
        <Timer />
      </div>
    </>
  );
};
export default App;
