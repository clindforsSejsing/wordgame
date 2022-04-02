import React, { useState } from 'react';
// import './CtaButton.css';
import { UsedLettersFromUser } from './UsedLettersFromUser.js';

function CtaButton(props) {
  const [inputWord, setInputWord] = useState('');
  // const guessedLetters = [];
  // const guessedLetters = [];
  const handleRenderLetters = async (e) => {
    let secretWord = props.word;
    let guessedWord = props.letters;

    //det hemliga ordet
    console.log(secretWord + 'hello');
    console.log(guessedWord + 'does it work now?');

    // console.log(props.copy + 'cat?');
    // console.log(props.word);
    // setLetters('');
    // onsubmit(letters);
    setInputWord(guessedWord);
    // function LettersFromUser(props) {
    // const [char, setChar] = useState('hello');

    //   if (props.inputWord) {
    //     for (let i = 0; i < props.inputWord.length; i++) {
    //       // console.log('I är: ' + i);
    //       guessedLetters.push(
    //         <li key={i + 8} id={i + 8} className="box">
    //           K
    //         </li>
    //       );
    //     }
    //   }
    //   return <>{guessedLetters}</>;
    // }
  };

  return (
    <>
      {/* {guessedLetters} */}
      <button className="btn__Guess" onClick={handleRenderLetters}>
        Gissa!
      </button>
      <div id="gameBoxTwo">
        <div id="secondInput">
          <UsedLettersFromUser inputWord={inputWord} />
        </div>
      </div>
    </>
  );
}

export { CtaButton };
