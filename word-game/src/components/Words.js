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
  // const [letters, setLetters] = useState([]);

  const handleChanger = async (e) => {
    // const response = await fetch('/api/userchoice/' + e.target.value);
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
      response = await fetch('/api/userchoice/' + nrOfLetters + '/unic?');
    }

    let responseWord = await response.text();
    setWord(responseWord);
    props.changeWord(responseWord);
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
    props.changeWord(responseWord);
    console.log('nytt ord' + responseWord);
  };

  // let changedHandlerWord = () => {
  //   props.changeWord(word);
  // };
  // const onSaveLettersDataHandler = (enterdLetters) => {
  //   const splittedWords = {
  //     ...enterdLetters,
  //   };
  //   for (let i = 0; i < splittedWords.length; i++) {}
  //   console.log(splittedWords);
  //   splittedWords(setLetters);
  // };

  // const onClick = async (e) => {
  //   setSpela('go');
  //   console.log('hellojsan' + word);
  //   if (spela === 'go') {
  //     return (
  //       <>
  //         <div id="gameBox">
  //           <div id="firstInput">
  //             <LettersFromUser word={word} />
  //           </div>
  //         </div>
  //         {/* <CtaButton /> */}
  //         <UserInput word={word} />
  //         onSaveLettersData={onSaveLettersDataHandler}
  //         <Timer />
  //       </>
  //     );
  //   }
  // };
  // const onStartGame = () => {
  //   setLetters('');
  //   onsubmit(letters);
  // };

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
          onClick={handleRefresh}
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
