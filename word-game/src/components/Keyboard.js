import './Keyboard.css';

function Keyboard(props) {
  //add click-event on btns
  // const handleLetters = (event) => props.onChangeLetter(event.target.value);

  // button.addEventListener("click", (event) => {
  //   if(event.key === event.target.innerHTML)

  //control so that del and enter is not shown as regular btns
  // if (onChangeLetter.length < 2) {
  //   for (let b = 0; b < rightGuessString.length; b++) {
  //     let currentBox = document.getElementById(b);
  //     if (currentBox.innerHTML == "") {
  //       let userChoice = event.target.innerHTML;
  //       guessesLeft--;
  //       currentGuess.push((currentBox.innerHTML = userChoice));
  //       return (currentBox.innerHTML = userChoice);
  //     }
  //   }
  // }
  // //check to be able to delete with btn Del

  // if (input == "Del") {
  //   for (let b = currentGuess.length - 1; b >= 0; b--) {
  //     let currentBox = document.getElementById(b);
  //     let removed = currentGuess.pop();
  //     if (currentBox.innerHTML != "") {
  //       if (removed === currentBox.innerHTML) {
  //         guessesLeft++;
  //         return (currentBox.innerHTML = "");
  //       }
  //     }
  //   }
  // }
  return (
    <>
      <div id="keyboard-cont">
        <div className="first-row">
          {/* <select value={props.selected} onChange={handleLetters} /> */}
          <button className="keyboard-button">Q</button>
          <button className="keyboard-button">W</button>
          <button className="keyboard-button">E</button>
          <button className="keyboard-button">R</button>
          <button className="keyboard-button">T</button>
          <button className="keyboard-button">Y</button>
          <button className="keyboard-button">U</button>
          <button className="keyboard-button">I</button>
          <button className="keyboard-button">O</button>
          <button className="keyboard-button">P</button>
          <button className="keyboard-button">Å</button>
        </div>
        <div className="second-row">
          <button className="keyboard-button">A</button>
          <button className="keyboard-button">S</button>
          <button className="keyboard-button">D</button>
          <button className="keyboard-button">F</button>
          <button className="keyboard-button">G</button>
          <button className="keyboard-button">H</button>
          <button className="keyboard-button">J</button>
          <button className="keyboard-button">K</button>
          <button className="keyboard-button">L</button>
          <button className="keyboard-button">Ö</button>
          <button className="keyboard-button">Ä</button>
        </div>
        <div className="third-row">
          <button className="keyboard-button">Del</button>
          <button className="keyboard-button">Z</button>
          <button className="keyboard-button">X</button>
          <button className="keyboard-button">C</button>
          <button className="keyboard-button">V</button>
          <button className="keyboard-button">B</button>
          <button className="keyboard-button">N</button>
          <button className="keyboard-button">M</button>
          <button className="keyboard-button">Enter</button>
        </div>
      </div>
    </>
  );
}
export { Keyboard };
