import './LettersFromUser.css';
// import React, { useState } from 'react';
//KOPPLA IHOP ANTALET RUTOR TILL ANTALET BOKSTÄVER I HEMLIGA ORDET
function LettersFromUser(props) {
  //   const [word, setWord] = useState(false);
  // console.log(isVisible + 'visible');

  if (props.word) {
    for (let i = 0; i < props.word.length; i++) {
      return (
        <>
          <div id="i" className="box" />
        </>
      );
    }
  }
}

export { LettersFromUser };
