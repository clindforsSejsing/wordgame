import './UserInput.css';
import React, { useState } from 'react';
// import { CtaButton } from './CtaButton.js';

function UserInput(props) {
  // const [letters, setLetters] = useState('');

  //const LetterChangeHandler = async (e) => {
  // let inputLetters = e.target.value;
  // let splittedWord = Array.from(inputLetters).map((index) =>
  //   index.toUpperCase()
  // );
  // setLetters(splittedWord);
  // console.log(setLetters);
  // console.log(
  //   'array' + Array.from(inputLetters).map((index) => index.toUpperCase())
  // );
  //};
  // props.onSaveLettersData(letters);

  //tömma inputfield- l.58 adding two way binding))))**
  let changedHandler = (event) => {
    props.changeText(event.target.value);

    // let inputLetters = event.target.value;
    // let splittedWord = Array.from(inputLetters).map((index) =>
    //   index.toUpperCase()
    // );
    // setLetters(splittedWord);
    // // console.log(setLetters);
    // console.log(
    //   'array' + Array.from(inputLetters).map((index) => index.toUpperCase())
    // );
  };

  return (
    <>
      <div className="user__input">
        <input
          type="text"
          className="input__field"
          // onChange={LetterChangeHandler}
          value={props.inputText}
          onChange={(event) => changedHandler(event)}
        ></input>
        {/* <CtaButton word={props.word} letters={letters} /> */}
      </div>
    </>
  );
}

export { UserInput };
