import './AddHighScore.css';
import React, { useState } from 'react';

function AddHighScore(props) {
  const [userName, setUsername] = useState('');
  const [savedMessage, setSavedMessage] = useState('');
  const rightAnswereResult = props.rightAnswere;
  const theRightWord = props.rightLetters;
  const amountOfGuesses = props.nrOfGuesses;
  const unikSetting = props.unikOrNot;
  const timeResult = props.time;

  const sendHighscore = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5080/api/highscores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          time: timeResult,
          guesses: amountOfGuesses,
          letters: theRightWord.length,
          unik: unikSetting,
          username: userName,
        }),
      });
    } catch (e) {}
  };

  const handlerBtn = () => {
    if (userName !== '') {
      console.log('gul bil');
      setSavedMessage('Ditt resultat är nu sparat!');
    }
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
              value={userName}
              type="text"
              className="name__inputField"
              placeholder="Namn"
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>
            <button type="submit" onClick={handlerBtn} className="submit__btn">
              Spara
            </button>
          </div>
        </form>
        <h2 className="message">{savedMessage}</h2>
      </>
    );
  } else {
    return <></>;
  }
}
export { AddHighScore };
