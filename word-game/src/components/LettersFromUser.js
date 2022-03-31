import './LettersFromUser.css';
import React, { useState } from 'react';

function LettersFromUser(props) {
  // const [char, setChar] = useState('');

  const elements = [];
  // console.log(props.onSubmit);

  if (props.word) {
    for (let i = 0; i < props.word.length; i++) {
      console.log('I är: ' + i);
      elements.push(<div key={i} id={i} className="box" />);
    }
  }
  return <>{elements}</>;
}

export { LettersFromUser };
