import './UserInput.css';
import React, { useState } from 'react';

function UserInput(props) {
  const [letters, setLetters] = useState('');

  const LetterChangeHandler = async (e) => {
    // få det till filterwords och vid formsubmit rendera upp det i rutorna. sedan feedbacken

    let inputLetters = e.target.value;
    let splittedWord = Array.from(inputLetters).map((index) =>
      index.toUpperCase()
    );
    setLetters(splittedWord);

    // console.log(setLetters);

    // console.log(
    //   'array' + Array.from(inputLetters).map((index) => index.toUpperCase())
    // );
  };
  props.onSaveLettersData(letters);

  const handleChangerLetter = async (e) => {
    //utskrift på det randomiserade ordet.
    //GÖRA JMF HÄR MED DET INSKRIVNA ORDET OCH DET RANDOMISERADE- RETURNERA FEEDBACK
    console.log(props.word);
    // setLetters('');
    // onsubmit(letters);
  };
  //tömma inputfield- l.58 adding two way binding))))**
  return (
    <>
      <div className="user__input">
        <input
          type="text"
          className="input__field"
          onChange={LetterChangeHandler}
        ></input>
        <button
          className="btn__Guess"
          // value={letters}
          onClick={handleChangerLetter}
        >
          Gissa!
        </button>
      </div>
    </>
  );
}

export { UserInput };
