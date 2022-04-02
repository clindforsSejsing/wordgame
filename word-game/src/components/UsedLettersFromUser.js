import './UsedLettersFromUser.css';
import React from 'react';

function UsedLettersFromUser(props) {
  {
    const guessedLetters = [];
    if (props.inputWord) {
      for (let i = 0; i < props.inputWord.length; i++) {
        // console.log('I är: ' + i);
        guessedLetters.push(
          <li key={i + 8} id={i + 8} className="box">
            {props.inputWord[i]}
          </li>
        );
      }
    }
    return <>{guessedLetters}</>;
  }
}

export { UsedLettersFromUser };
