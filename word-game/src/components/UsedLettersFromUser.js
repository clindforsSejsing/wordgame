import './UsedLettersFromUser.css';
// import React, { useState, useEffect } from 'react';
import { compareWords } from './compareWords.js';

////MÅSTE SPARA INMATNINGEN; SPARA ANTAL GISSNINGAR OCH RENDERA UPP NY GISSNING; MED USEEFFECT? TÖMMA INMATNING NÄR GISSA_KNAPPEN TRYCKS:

function UsedLettersFromUser(props) {
  // const [firstGuess, setFirstGuess] = useState(null);

  let guessedWord = props.inputWord;
  let mysteryWord = props.theSecretWord;
  let arr = compareWords(guessedWord, mysteryWord);
  const guessedLetters = [];

  for (let c = 0; c < arr.length; c++) {
    if (arr[c].result === 'correct') {
      guessedLetters.push(
        <li key={c + 1} id={c + 1} className="box" style={{ color: 'green' }}>
          {guessedWord[c]}
        </li>
      );
    } else if (arr[c].result === 'incorrect') {
      guessedLetters.push(
        <li key={c + 2} id={c + 2} className="box" style={{ color: 'red' }}>
          {guessedWord[c]}
        </li>
      );
    } else if (arr[c].result === 'misplaced') {
      guessedLetters.push(
        <li key={c + 3} id={c + 3} className="box" style={{ color: 'blue' }}>
          {guessedWord[c]}
        </li>
      );
    }
    if (guessedWord.length !== mysteryWord.length) {
      return <h2>Fel antal bokstäver. Försök igen. </h2>;
    }
  }
  return <>{guessedLetters}</>;
}
export { UsedLettersFromUser };
