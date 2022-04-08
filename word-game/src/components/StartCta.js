import React, { useState, useEffect } from 'react';
// import { Timer } from './Timer.js';
// import Clock from './components/Clock.js';

function StartCta(props) {
  const [message, setMessage] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const mysteryWord = props.rightGuess;
  const guessedWord = props.inputText;
  //collect the guessed word and the right word- compare and return true or false depending on result.

  // console.log(props.inputText + 'inputtext');
  const secretWord = Array.from(mysteryWord);
  // console.log(secretWord + 'secretWord');
  let splittedWord;
  let answer;
  let time;
  // let interval = null;
  useEffect(() => {
    let interval = 0;
    if (isActive && props.game === 'true') {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      console.log(interval + 'intervall');
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  if (guessedWord !== '' && guessedWord.length === mysteryWord.length) {
    splittedWord = Array.from(guessedWord).map((index) => index.toUpperCase());
  }

  if (
    splittedWord !== '' &&
    JSON.stringify(splittedWord) === JSON.stringify(secretWord)
  ) {
    answer = 'correct';
  } else answer = 'incorrect';

  function toggle() {
    setIsActive(!isActive);
  }
  const clickChangeText = () => {
    toggle();
    props.correctWord(answer);
    //Empty inputfield
    props.buttonClick('');
    if (guessedWord.length !== mysteryWord.length) {
      setMessage('Fel antal bokstäver. Försök igen.');
    } else {
      setMessage('');
    }
    if (guessedWord === '') {
      setMessage('Kontrollera att fältet är ifyllt.');
    }
  };

  return (
    <>
      <input
        type="button"
        className={`${isActive ? 'active' : 'inactive'}`}
        value="Gissa"
        id="start__game"
        onClick={clickChangeText}
      />
      <h2>{message}</h2>
      <div className="time">
        {seconds}s{time}
      </div>
    </>
  );
}

export { StartCta };
