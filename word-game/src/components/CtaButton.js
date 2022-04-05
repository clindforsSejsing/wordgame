import React, { useState } from 'react';
// import './CtaButton.css';
import { UsedLettersFromUser } from './UsedLettersFromUser.js';
import { Timer } from './Timer.js';

function CtaButton(props) {
  const [inputWord, setInputWord] = useState('');
  const [theSecretWord, setTheSecretWord] = useState('');
  //const [blabla, setBlabla] = useState([]);

  const handleRenderLetters = async (e) => {
    let secretWord = props.word;
    let guessedWord = props.letters;
    setInputWord(guessedWord);
    setTheSecretWord(secretWord);
  };
  //INHÄMTA DATA FÖR ATT PASSERA TILL TIMER FÖR ATT KONTROLLERA DENS START OCH STOP FUNKTION
  const onSaveCorrectWordDataHandler = (correctAnswer) => {
    // const rightAnswere = {
    //   ...correctAnswer,
    // };
    // console.log(rightAnswere);
  };

  const handleResult = () => {};

  // const myBlablaSetter = (bla) => {
  //   setBlabla(bla);
  // };

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
            onSaveCorrectWord={onSaveCorrectWordDataHandler}
            onChange={handleResult}
          />
        </div>
      </div>
      {/* <Timer startRender={inputWord} /> */}
    </>
  );
}

export { CtaButton };
