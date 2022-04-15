import './AddHighScore.css';

function AddHighScore(props) {
  const rightAnswereResult = props.rightAnswere;
  const theRightWord = props.rightLetters;
  const amountOfGuesses = props.nrOfGuesses;
  const unikSetting = props.unikOrNot;
  const timeResult = props.time;
  console.log(unikSetting + 'hello');

  // console.log(theRightWord + 'hello');
  // console.log(rightAnswereResult);

  if (rightAnswereResult === 'correct') {
    return (
      <>
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
            type="text"
            className="name__inputField"
            placeholder="Namn"
          ></input>
          <button type="submit" className="submit__btn">
            Spara
          </button>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
export { AddHighScore };
