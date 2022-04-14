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
        <p>Spara mitt resultat i Highscore-listan:</p>
        <input type="text" placeholder="Namn"></input>
        <button type="submit">Spara</button>
      </>
    );
  } else {
    return <></>;
  }
}
export { AddHighScore };
