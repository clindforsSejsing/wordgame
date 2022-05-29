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
          <h1 className="font-serif text-xl md:ml-52">
            Du vann! Rätt ord var: {theRightWord}
          </h1>
          <p className="font-serif text-xs md:ml-52">
            Tid: {timeResult} sekunder{' '}
          </p>
          <p className="font-serif text-xs md:ml-52">
            Antal gissningar: {amountOfGuesses}
          </p>
          <p className="font-serif text-xs md:ml-52">
            Antal bokstäver: {theRightWord.length}
          </p>
          <p className="font-serif text-xs md:ml-52">
            Unika bokstäver: {unikSetting}
          </p>
          <div className="addTo__highscore font-serif text-xl md:ml-52">
            <h2 className="text__smallHeader font-serif text-xl pb-2 pt-4">
              Spara i Highscore-listan:
            </h2>
            <label htmlFor="name"></label>
            <input
              value={userName}
              type="text"
              className="name__inputField font-serif text-sm md:text-lg shadow-lg"
              placeholder="Namn"
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>
            <button
              type="submit"
              onClick={handlerBtn}
              className="submit__btn bg-lime-200 shadow-lg rounded-lg w-15 h-8 w-28 md:ml-8"
            >
              Spara
            </button>
          </div>
        </form>
        <h2 className="message md:ml-52 pt-8 text-green animate-bounce">
          {savedMessage}
        </h2>
      </>
    );
  } else {
    return <></>;
  }
}
export { AddHighScore };
