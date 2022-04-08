import './AddHighScore.css';

function AddHighScore(props) {
  const rightAnswereResult = props.rightAnswere;
  const theRightWord = props.rightLetters;
  // console.log(theRightWord + 'hello');
  // console.log(rightAnswereResult);

  if (rightAnswereResult === 'correct') {
    return (
      <>
        <h1> Du vann! Rätt ord var: {theRightWord}</h1>
        <p>Tid: </p>
        {/* <p>Antal gissningar:{addGuesses.length} </p> */}
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
