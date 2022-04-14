import React, { useState, useEffect } from 'react';
import './Words.css';
import { LettersFromUser } from './LettersFromUser.js';
// import { UsedLettersFromUser } from './UsedLettersFromUser.js';
// import { UserInput } from './UserInput.js';
// // import { CtaButton } from './CtaButton.js';
// import { Timer } from './Timer.js';

function Words(props) {
  const [word, setWord] = useState(null);
  const [nrOfLetters, setNrOfLetters] = useState(null);
  const [unic, setUnic] = useState(null);
  let unikValue;
  useEffect(() => {
    if (unic === true) {
      unikValue = 'Ja';
    } else {
      unikValue = 'Nej';
    }
    props.unikLettersTrueFalse(unikValue);
  });

  const handleChanger = async (e) => {
    setNrOfLetters(e.target.value);

    let response;
    if (unic) {
      response = await fetch('/api/userchoice/' + e.target.value + '/unic?');
    } else {
      response = await fetch('/api/userchoice/' + e.target.value);
    }
    let responseWord = await response.text();
    setWord(responseWord);
    props.changeWord(responseWord);
    // console.log('word1: ' + responseWord);
  };

  const handleUnic = async (e) => {
    console.log('word: ' + (await word));
    let response;
    if (unic) {
      setUnic(false);
      response = await fetch('/api/userchoice/' + nrOfLetters);
    } else {
      setUnic(true);
      unikValue = 'Nej';
      response = await fetch('/api/userchoice/' + nrOfLetters + '/unic?');
    }

    let responseWord = await response.text();
    setWord(responseWord);
    props.changeWord(responseWord);
  };

  const handleUnikLetters = async (e) => {
    let response;
    if (unic) {
      response = await fetch('/api/userchoice/' + nrOfLetters + '/unic?');
      // unikValue = 'Ja';
    } else {
      response = await fetch('/api/userchoice/' + nrOfLetters);
      // unikValue = 'Nej';
    }
    let responseWord = await response.text();
    setWord(responseWord);
    props.changeWord(responseWord);
    // props.unikLettersTrueFalse(unikValue);
    console.log('nytt ord' + responseWord);
  };

  return (
    <>
      <div className="rowOfRadioBtns">
        <input
          type="radio"
          value="4"
          id="fourletterword"
          onChange={handleChanger}
          name="word"
        />
        <label htmlFor="fourletterword">Fyra Bokstäver</label>
        <input
          type="radio"
          value="5"
          id="fiveletterword"
          onChange={handleChanger}
          name="word"
        />
        <label htmlFor="fiveletterword">Fem Bokstäver</label>

        <input
          type="radio"
          value="6"
          id="sixletterword"
          onChange={handleChanger}
          name="word"
        />
        <label htmlFor="sixletterword">Sex Bokstäver</label>

        <input
          type="radio"
          value="7"
          id="sevenletterword"
          onChange={handleChanger}
          name="word"
        />
        <label htmlFor="sevenletterword">Sju Bokstäver</label>
        <input
          type="checkbox"
          value="unic"
          id="allwords"
          name="unic"
          onChange={handleUnic}
        />
        <label htmlFor="allwords">Unika Bokstäver </label>
        <input
          type="button"
          value="Välj Nytt ord"
          id="refreshButton"
          onClick={handleUnikLetters}
        />
        <div id="gameBox">
          <div id="firstInput">
            <LettersFromUser word={word} />
          </div>
        </div>
        {/* <input
          type="button"
          id="startGame"
          // onClick={onStartGame}>
        >
          Spela
        </input>*/}
      </div>
    </>
  );
}

export { Words };
