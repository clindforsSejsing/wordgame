import React, { useState } from 'react';

function StartCta(props) {
  const [message, setMessage] = useState('');
  //collect the guessed word and the right word- compare and return true or false depending on result.

  // console.log(props.rightGuess + 'mystery');
  const mysteryWord = props.rightGuess;
  const guessedWord = props.inputText;

  // console.log(props.inputText + 'inputtext');
  const secretWord = Array.from(mysteryWord);
  console.log(secretWord + 'secretWord');
  let splittedWord;
  let answer;

  if (guessedWord !== '' && guessedWord.length === mysteryWord.length) {
    splittedWord = Array.from(guessedWord).map((index) => index.toUpperCase());
    console.log(
      'splittedWord' +
        Array.from(guessedWord).map((index) => index.toUpperCase())
    );
  }
  // console.log(JSON.stringify(splittedWord) + 'compare1');
  // console.log(JSON.stringify(secretWord) + 'compare2');

  if (
    splittedWord !== '' &&
    JSON.stringify(splittedWord) === JSON.stringify(secretWord)
  ) {
    answer = 'correct';
  } else answer = 'incorrect';

  const clickChangeText = () => {
    props.correctWord(answer);
    //Empty inputfield
    props.buttonClick('');
    if (guessedWord.length !== mysteryWord.length) {
      setMessage('Fel antal bokstäver. Försök igen.');
    } else {
      setMessage('');
    }
  };

  return (
    <>
      <input
        type="button"
        value="Töm textfältet"
        id="start__game"
        onClick={clickChangeText}
      />
      <h2>{message}</h2>
    </>
  );
}

export { StartCta };
