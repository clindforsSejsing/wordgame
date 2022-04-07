import './UsedLettersFromUser.css';
import React, { useState } from 'react';
// import { compareWords } from './compareWords.js';
// import { newSuperFunction } from './newSuperFunction.js';
import { HighScore } from './HighScore.js';

//handling with feedback if word match or not, rendering up feedback

function UsedLettersFromUser(props) {
  // const [blabla, setBlabla] = useState([]);
  // const [myArr, setmyArr] = useState([]);

  console.log(props.answere);

  // console.log(props.rightGuess + 'mystery');

  //inhämtade ord och inskrivet ord
  // const guessedWord = props.choosenLetters;
  // console.log(guessedWord + ' det gissade ordet');
  // const mysteryWord = props.rightGuess;
  // let splittedWord;
  // if (guessedWord !== '' && guessedWord.length === mysteryWord) {
  //   splittedWord = Array.from(guessedWord).map((index) => index.toUpperCase());
  //   console.log(
  //     'array splitted' +
  //       Array.from(guessedWord).map((index) => index.toUpperCase())
  //   );
  // }

  // const secretWord = Array.from(mysteryWord);
  // console.log(secretWord + 'hemligt');
  // console.log(splittedWord + 'gissade ordet');

  // let arr = compareWords(guessedWord, mysteryWord);
  // setBlabla(newSuperFunction(arr, blabla, guessedWord));
  //splittedWord är den gissade arrayen

  // const [guesses, setGuesses] = useState([]);
  //   //first time usestate should be the guessed word. Second time it should be a new word
  // setBlabla(Math.floor(Math.random() * 11111));
  // console.log('Blabla: ' + { blabla });
  // console.log('hej');

  // // let arr = compareWords(guessedWord, mysteryWord);
  // let arr = props.arrayState;
  // const guessedLetters = [];
  // let secretWord = Array.from(mysteryWord);
  // const wordGuess = guessedWord.toString().split(',');

  //   //SÄTTER EN ARRAY SOM SKA UPPDATERA GISSNINGAR
  // const addGuesses = () => {
  //   setGuesses((i) => [...i, guessedWord]);
  // };
  // const handleResult = () => {};

  //    const myBlablaSetter = (bla) => {
  //     setBlabla(bla);
  //    };
  // if (
  //   mysteryWord !== '' &&
  //   JSON.stringify(wordGuess) === JSON.stringify(secretWord)
  // ) {
  //     if (secretWord !== '' &&
  //   JSON.stringify(splittedWord) === JSON.stringify(secretWord)
  // ) {
  //setGame('true');
  // props.onSaveCorrectWord(game);
  // setRightGuess(guessedWord);
  //     //UTSKRIFT AV ANTAL GISSNINGAR
  return (
    <>
      {/* <h1> Du vann! Rätt ord var: {guessedWord}</h1> */}
      <p>Tid: </p>
      {/* <p>Antal gissningar:{addGuesses.length} </p> */}
      <HighScore />
    </>
  );

  // function newSuperFunction(arr, letterArr, guessedWord) {
  //   for (let c = 0; c < arr.length; c++) {
  //     if (arr[c].result === 'correct') {
  //       letterArr.push(
  //         <li
  //           key={c + Math.floor(Math.random() * 100000)}
  //           className="box"
  //           style={{ color: 'green' }}
  //         >
  //           {guessedWord[c]}
  //         </li>
  //       );
  //     } else if (arr[c].result === 'incorrect') {
  //       letterArr.push(
  //         <li
  //           key={c + Math.floor(Math.random() * 100000)}
  //           className="box"
  //           style={{ color: 'red' }}
  //         >
  //           {guessedWord[c]}
  //         </li>
  //       );
  //     } else if (arr[c].result === 'misplaced') {
  //       letterArr.push(
  //         <li
  //           key={c + Math.floor(Math.random() * 100000)}
  //           className="box"
  //           style={{ color: 'blue' }}
  //         >
  //           {guessedWord[c]}
  //         </li>
  //       );
  //     }
  //   }
  //   letterArr.push(<br key={Math.floor(Math.random() * 1000000)}></br>);
  //   return letterArr;
  // }

  // if (guessedWord.length !== mysteryWord.length) {
  //   return <h2>Fel antal bokstäver. Försök igen. </h2>;

  //OM GISSINGARNA ÄR FEL SKA DEN FYLLA PÅ ARRAYEN
  // if (
  //   guessedWord.length === mysteryWord.length &&
  //   JSON.stringify(wordGuess) !== JSON.stringify(secretWord)
  // ) {
  //   setGuesses(guessedWord);
  //}
  // return <>{guessedLetters}</>;
  // }

  // for (let c = 0; c < arr.length; c++) {
  //   if (arr[c].result === 'correct') {
  //     guessedLetters.push(
  //       <li key={c + mysteryWord} className="box" style={{ color: 'green' }}>
  //         {guessedWord[c]}
  //       </li>
  //     );
  //   } else if (arr[c].result === 'incorrect') {
  //     guessedLetters.push(
  //       <li key={c + mysteryWord} className="box" style={{ color: 'red' }}>
  //         {guessedWord[c]}
  //       </li>
  //     );
  //   } else if (arr[c].result === 'misplaced') {
  //     guessedLetters.push(
  //       <li key={c + mysteryWord} className="box" style={{ color: 'blue' }}>
  //         {guessedWord[c]}
  //       </li>
  //     );
  //   }
  // }
  // props.blasetter(guessedLetters);
  // console.log(props.bla);
  // return <>{props.bla}</>;
  // setmyArr(guessedLetters);
  // return <>{arr}</>;
  // return <>{guessedLetters}</>;
}

export { UsedLettersFromUser };
