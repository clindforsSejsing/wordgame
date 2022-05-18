import React, { useState } from 'react';
import { UserInput } from './components/UserInput.js';
import { UsedLettersFromUser } from './components/UsedLettersFromUser.js';
import { Words } from './components/Words';
import { StartCta } from './components/StartCta.js';
import { AddHighScore } from './components/AddHighScore.js';
import { compareWords } from './compareWords.js';
import { colorBoxFeedback } from './colorBoxFeedback.js';
import './App.css';

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
    const uppercaseText = text.toUpperCase();
    setInputText(uppercaseText);
    setGame('true');
  }

  function inputTextSetterOnClick(text) {
    inputTextSetter(text);
    if (inputText.length === rightWord.length) {
      const comparedWordsArray = compareWords(inputText, rightWord);
      // console.log(comparedWordsArray[0]);

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
  // async function GameRulesHandler() {
  //   const rule = await fetch('rules');
  //   // console.log(rule + 'rules');
  //   // return { rule };
  //   // window.location.href = '../rules';
  //   setRules(rule);
  // }
  // async function rulesPage() {
  //   await fetch('/rules');
  //   console.log(rulesPage + 'rules');
  // }
  function rulesPage() {
    window.location.href = 'http://localhost:5080/rules';
    // fetch('/rules');
  }
  return (
    <>
      <div className="App">
        {/* <GameRules /> */}
        <nav>
          <button id="game__rules" onClick={rulesPage}>
            Spelregler
          </button>
          <button id="high__score">Highscore-lista</button>
        </nav>
        <h1 className="header">Wordgame</h1>
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
      <p id="footer">@CLS 2022-04-16</p>
    </>
  );
};

export default App;
