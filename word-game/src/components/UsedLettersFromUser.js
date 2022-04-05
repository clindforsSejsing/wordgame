import './UsedLettersFromUser.css';
import React, { useState } from 'react';
import { compareWords } from './compareWords.js';
import { HighScore } from './HighScore.js';

function UsedLettersFromUser(props) {
  const [game, setGame] = useState('false');
  const [myArr, setmyArr] = useState([]);

  const [guesses, setGuesses] = useState([]);
  //first time usestate should be the guessed word. Second time it should be a new word
  //setBlabla(Math.floor(Math.random() * 11111));
  //console.log('Blabla: ' + { blabla });
  console.log('hej');

  let guessedWord = props.inputWord;
  let mysteryWord = props.theSecretWord;
  let arr = compareWords(guessedWord, mysteryWord);
  const guessedLetters = [];
  let secretWord = Array.from(mysteryWord);
  const wordGuess = guessedWord.toString().split(',');

  //SÄTTER EN ARRAY SOM SKA UPPDATERA GISSNINGAR
  // const addGuesses = () => {
  //   setGuesses((i) => [...i, guessedWord]);
  // };

  if (
    mysteryWord !== '' &&
    JSON.stringify(wordGuess) === JSON.stringify(secretWord)
  ) {
    //setGame('true');
    //props.onSaveCorrectWord(game);
    // setRightGuess(guessedWord);
    //UTSKRIFT AV ANTAL GISSNINGAR
    return (
      <>
        <h1> Du vann! Rätt ord var: {guessedWord}</h1>
        <p>Tid: </p>
        {/* <p>Antal gissningar:{addGuesses.length} </p> */}
        <HighScore />
      </>
    );
  }

  if (guessedWord.length !== mysteryWord.length) {
    return <h2>Fel antal bokstäver. Försök igen. </h2>;

    //OM GISSINGARNA ÄR FEL SKA DEN FYLLA PÅ ARRAYEN
    // if (
    //   guessedWord.length === mysteryWord.length &&
    //   JSON.stringify(wordGuess) !== JSON.stringify(secretWord)
    // ) {
    //   setGuesses(guessedWord);
    //}
    // return <>{guessedLetters}</>;
  }

  for (let c = 0; c < arr.length; c++) {
    if (arr[c].result === 'correct') {
      guessedLetters.push(
        <li key={c + mysteryWord} className="box" style={{ color: 'green' }}>
          {guessedWord[c]}
        </li>
      );
    } else if (arr[c].result === 'incorrect') {
      guessedLetters.push(
        <li key={c + mysteryWord} className="box" style={{ color: 'red' }}>
          {guessedWord[c]}
        </li>
      );
    } else if (arr[c].result === 'misplaced') {
      guessedLetters.push(
        <li key={c + mysteryWord} className="box" style={{ color: 'blue' }}>
          {guessedWord[c]}
        </li>
      );
    }
  }
  //props.blasetter(guessedLetters);
  //console.log(props.bla);
  //return <>{props.bla}</>;
  //setmyArr(guessedLetters);
  //return <>{myArr}</>;
  return <>{guessedLetters}</>;
}

export { UsedLettersFromUser };
