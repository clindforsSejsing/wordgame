import React, { useEffect, useState } from 'react';
// import './CtaButton.css';
import { UsedLettersFromUser } from './UsedLettersFromUser.js';

function CtaButton(props) {
  const [inputWord, setInputWord] = useState('');
  const [theSecretWord, setTheSecretWord] = useState('');
  // const [firstGuess, setFirstGuess] = useState(null);
  // const guessedLetters = [];
  const handleRenderLetters = async (e) => {
    let secretWord = props.word;
    let guessedWord = props.letters;
    // let isEqual = JSON.stringify(guessedWord) === JSON.stringify(secretWord);
    // if (isEqual) {
    //   return <h1> Du vann! Rätt ord var{guessedWord}</h1>;
    // }
    //det hemliga ordet
    console.log(secretWord + 'hello');
    console.log(guessedWord + 'does it work now?');

    setInputWord(guessedWord);
    setTheSecretWord(secretWord);
  };

  const handleFirstGuess = async (e) => {};

  return (
    <>
      {/* {guessedLetters} */}
      <button className="btn__Guess" onClick={handleRenderLetters}>
        Gissa!
      </button>
      <div id="gameBoxTwo">
        <div id="secondInput">
          <UsedLettersFromUser
            inputWord={inputWord}
            theSecretWord={theSecretWord}
            onChangeHandler={handleFirstGuess}
          />
        </div>
      </div>
    </>
  );
}

export { CtaButton };
