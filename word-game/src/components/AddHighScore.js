import './AddHighScore.css';
import React, { useState } from 'react';

function AddHighScore(props) {
  const [userName, setUsername] = useState('');
  const rightAnswereResult = props.rightAnswere;
  const theRightWord = props.rightLetters;
  const amountOfGuesses = props.nrOfGuesses;
  const unikSetting = props.unikOrNot;
  const timeResult = props.time;
  console.log(unikSetting + 'hello');

  const sendHighscore = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/highscore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        time: timeResult,
        guesses: amountOfGuesses,
        letters: theRightWord,
        unik: unikSetting,
        username: userName,
      }),
    });
    console.log(response);
  };

  if (rightAnswereResult === 'correct') {
    return (
      <>
        <form onSubmit={sendHighscore}>
          <h1> Du vann! Rätt ord var: {theRightWord}</h1>
          <p>Tid: {timeResult} sekunder </p>
          <p>Antal gissningar: {amountOfGuesses} </p>
          <p>Antal bokstäver: {theRightWord.length} </p>
          <p>Unika bokstäver: {unikSetting}</p>
          <div className="addTo__highscore">
            <h2 className="text__smallHeader">
              Spara mitt resultat i Highscore-listan:
            </h2>
            <label htmlFor="name"></label>
            <input
              id="username"
              type="text"
              className="name__inputField"
              placeholder="Namn"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <button type="submit" className="submit__btn">
              Spara
            </button>
          </div>
        </form>
      </>
    );
  } else {
    return <></>;
  }
}
export { AddHighScore };
