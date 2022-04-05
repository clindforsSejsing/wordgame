import './HighScore.css';
function HighScore() {
  return (
    <>
      <p>Spara mitt resultat i Highscore-listan:</p>
      <input type="text" placeholder="Namn"></input>
      <button type="submit">Spara</button>
    </>
  );
}

export { HighScore };
