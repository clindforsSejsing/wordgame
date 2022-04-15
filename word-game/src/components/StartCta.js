import React, { useState, useEffect } from 'react';
import './StartCta.css';
function StartCta(props) {
  const [message, setMessage] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const mysteryWord = props.rightGuess;
  const guessedWord = props.inputText;
  //collect the guessed word and the right word- compare and return true or false depending on result.

  const secretWord = Array.from(mysteryWord);
  let splittedWord;
  let answer;

  useEffect(() => {
    let interval = 0;
    if (isActive && props.game === 'true') {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      props.getRightTime(seconds);
      console.log(interval + 'intervall');
    } else if (!isActive && answer === 'correct') {
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
    if (answer === 'correct') {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }
  const clickChangeText = () => {
    //Empty inputfield
    props.buttonClick('');
    if (guessedWord === '') {
      setMessage('Kontrollera att fältet är ifyllt.');
    } else if (guessedWord.length !== mysteryWord.length) {
      setMessage('Fel antal bokstäver. Försök igen.');
    } else {
      setMessage('');
      toggle();
      props.correctWord(answer);
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
      <h2 className="message">{message}</h2>
      <div className="time">Tid: {seconds}</div>
    </>
  );
}

export { StartCta };
