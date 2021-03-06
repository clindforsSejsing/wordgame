import React, { useState } from 'react';
import { UserInput } from './components/UserInput.js';
import { UsedLettersFromUser } from './components/UsedLettersFromUser.js';
import { Words } from './components/Words';
import { StartCta } from './components/StartCta.js';
import { AddHighScore } from './components/AddHighScore.js';
import { compareWords } from './compareWords.js';
import { colorBoxFeedback } from './colorBoxFeedback.js';
import './assets/main.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [rightWord, setRightWord] = useState([]);
  const [answere, setAnswere] = useState('false');
  const [boxes, setBoxes] = useState([]);
  const [guesses, setGuesses] = useState(0);
  const [game, setGame] = useState('false');
  const [unik, setUnik] = useState('false');
  const [time, setTime] = useState(0);

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

  function rulesPage() {
    window.location.href = 'http://localhost:5080/rules';
  }
  function highscorePage() {
    window.location.href = 'http://localhost:5080/highscores';
  }
  function playAgain() {
    window.location.href = 'http://localhost:5081';
  }
  return (
    <>
      <div className="rounded shadow-lg p-10 w-screen h-screen">
        <nav>
          <button
            id="game__rules"
            className="font-serif italic p-2 text-base rounded shadow-lg bg-pink-300 hover:bg-pink-200 md:ml-2"
            onClick={rulesPage}
          >
            Spelregler
          </button>
          <button
            id="high__score"
            className="font-serif italic bg-pink-300 hover:bg-pink-200 p-2 ml-2
            text-base rounded shadow-lg"
            onClick={highscorePage}
          >
            Highscore-lista
          </button>
          <button
            id="play__again"
            className="font-serif italic bg-pink-300 hover:bg-pink-200 p-2 ml-2
            text-base rounded shadow-lg"
            onClick={playAgain}
          >
            Nytt Spel
          </button>
        </nav>
        <h1 className="font-serif italic text-5xl pt-10 flex items-center justify-center md:justify-start md:ml-52">
          Wordgame
        </h1>
        <Words
          changeWord={secretWordsLetters}
          unikLettersTrueFalse={unikLetters}
        />
        <div className=" white-space: pre-wrap flex flex-center flex-wrap md:ml-52">
          <UsedLettersFromUser boxesToRender={boxes} />
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
