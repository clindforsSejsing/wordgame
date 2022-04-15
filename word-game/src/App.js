import React, { useState } from 'react';
import { UserInput } from './components/UserInput.js';
import { UsedLettersFromUser } from './components/UsedLettersFromUser.js';
import { Words } from './components/Words';
// import Clock from './components/Clock.js';
import { StartCta } from './components/StartCta.js';
import { AddHighScore } from './components/AddHighScore.js';
import { compareWords } from './compareWords.js';
import { colorBoxFeedback } from './colorBoxFeedback.js';
import './App.css';

// import Winnings from './components/Winnings';

//FELKONTROLLER KVAR!!!**************** å STYLING

const App = () => {
  const [inputText, setInputText] = useState('');
  const [rightWord, setRightWord] = useState([]);
  const [answere, setAnswere] = useState('false');
  const [boxes, setBoxes] = useState([]);
  const [guesses, setGuesses] = useState(0);
  const [game, setGame] = useState('false');
  const [unik, setUnik] = useState('false');
  const [time, setTime] = useState(0);

  //sätt gamestate till false när rätt ord gissats och timer bör även den sättas till false när den stannas

  function secretWordsLetters(word) {
    setRightWord(word);
  }

  function inputTextSetter(text) {
    //console.log('setting inputText to: ' + text);
    const uppercaseText = text.toUpperCase();
    setInputText(uppercaseText);
    setGame('true');
  }

  function inputTextSetterOnClick(text) {
    inputTextSetter(text);
    if (inputText.length == rightWord.length) {
      const comparedWordsArray = compareWords(inputText, rightWord);
      console.log(comparedWordsArray[0]);

      let tempboxes = colorBoxFeedback(
        comparedWordsArray,
        boxes,
        inputText,
        guesses
      );
      setBoxes(tempboxes);
      setGuesses(guesses + 1);
    }
    if (answere === 'correct') {
      setGame('false');
    }
  }

  function correctWordSetter(answere) {
    setAnswere(answere);
  }

  function unikLetters(unikValue) {
    if (game === 'true') {
      setUnik(unikValue);
    }
  }
  function timer(seconds) {
    setTime(seconds);
  }

  return (
    <>
      <div className="App">
        <h1>Wordgame</h1>
        <Words
          changeWord={secretWordsLetters}
          unikLettersTrueFalse={unikLetters}
        />
        <div id="gameBoxTwo">
          <div id="second__Input">
            <UsedLettersFromUser boxesToRender={boxes} />
          </div>
        </div>
        <UserInput inputText={inputText} changeText={inputTextSetter} />
        <StartCta
          buttonClick={inputTextSetterOnClick}
          inputText={inputText}
          rightGuess={rightWord}
          correctWord={correctWordSetter}
          game={game}
          getRightTime={timer}
        />
        <AddHighScore
          rightAnswere={answere}
          rightLetters={rightWord}
          nrOfGuesses={guesses}
          nrOfBoxes={boxes}
          unikOrNot={unik}
          time={time}
        />
      </div>
    </>
  );
};

export default App;
