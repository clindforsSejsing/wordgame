import './FilterRandomWord.css';
import { LettersFromUser } from './LettersFromUser.js';
import { UserInput } from './UserInput.js';
import React, { useState } from 'react';

function FilterRandomWord() {
  const [word, setWord] = useState(null);
  const [nrOfLetters, setNrOfLetters] = useState(null);
  const [unic, setUnic] = useState(null);

  const handleChanger = async (e) => {
    // const response = await fetch('/api/userchoice/' + e.target.value);
    setNrOfLetters(e.target.value);

    let response;
    if (unic) {
      response = await fetch('/api/userchoice/' + e.target.value + '/unic?');
    } else {
      response = await fetch('/api/userchoice/' + e.target.value);
    }
    // console.log('current: ' + window.location.origin);
    console.log('/api/userchoice/' + e.target.value);
    // console.log(await response.text());
    // setNrOfLetters(e.target.value);
    let responseWord = await response.text();
    // setWord(await response.text());
    setWord(responseWord);
  };

  const handleUnic = async (e) => {
    console.log('word: ' + (await word));
    let response;
    if (unic) {
      setUnic(false);
      response = await fetch('/api/userchoice/' + nrOfLetters);
    } else {
      setUnic(true);
      response = await fetch('/api/userchoice/' + nrOfLetters + '/unic?');
    }

    //  const response = await fetch('/api/userchoice/id/' + nrOfLetters);
    //
    let responseWord = await response.text();
    setWord(responseWord);
  };

  const handleRefresh = async (e) => {
    let response;
    if (unic) {
      response = await fetch('/api/userchoice/' + nrOfLetters + '/unic?');
    } else {
      response = await fetch('/api/userchoice/' + nrOfLetters);
    }
    let responseWord = await response.text();
    setWord(responseWord);
  };

  const onSaveLettersDataHandler = (enterdLetters) => {
    const splittedWords = {
      ...enterdLetters,
    };
    // setUserLetters(splittedWords);

    console.log(typeof splittedWords);
    console.log(splittedWords);
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
          value="Nytt ord"
          id="refreshButton"
          onClick={handleRefresh}
        />
      </div>
      <div id="gameBox">
        <div id="firstInput">
          <LettersFromUser word={word} />
        </div>
      </div>
      <UserInput word={word} onSaveLettersData={onSaveLettersDataHandler} />
    </>
  );
}

export { FilterRandomWord };
