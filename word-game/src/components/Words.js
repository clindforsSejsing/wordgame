import React, { useState, useEffect } from 'react';
// import './Words.css';
import { LettersFromUser } from './LettersFromUser.js';

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
  };

  const handleUnic = async (e) => {
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

  return (
    <>
      <div className="grid grid-rows-5  grid-flow-col gap-10 text-base font-serif pt-10 ">
        <div>
          <input
            type="radio"
            value="4"
            id="fourletterword"
            onChange={handleChanger}
            name="word"
          />
          <label htmlFor="fourletterword"> Fyra Bokstäver </label>
        </div>
        <div>
          <input
            type="radio"
            value="5"
            id="fiveletterword"
            onChange={handleChanger}
            name="word"
          />
          <label htmlFor="fiveletterword"> Fem Bokstäver </label>
        </div>
        <div>
          <input
            type="radio"
            value="6"
            id="sixletterword"
            onChange={handleChanger}
            name="word"
          />
          <label htmlFor="sixletterword"> Sex Bokstäver </label>
        </div>
        <div>
          <input
            type="radio"
            value="7"
            id="sevenletterword"
            onChange={handleChanger}
            name="word"
          />
          <label htmlFor="sevenletterword"> Sju Bokstäver </label>
        </div>
        <div>
          <input
            type="checkbox"
            value="unic"
            id="allwords"
            name="unic"
            onChange={handleUnic}
          />
          <label htmlFor="allwords"> Unika Bokstäver </label>
        </div>
      </div>
      <div className="flex flex-row w-48 bg-red-200">
        <LettersFromUser word={word} className="bg-pink-300" />
      </div>
    </>
  );
}

export { Words };
