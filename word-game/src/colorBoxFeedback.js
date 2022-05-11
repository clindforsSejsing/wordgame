export function colorBoxFeedback(
  comparedWordsArray,
  letterArr,
  guessedWord,
  guesses
) {
  for (let c = 0; c < comparedWordsArray.length; c++) {
    if (comparedWordsArray[c].result === 'correct') {
      letterArr.push(
        <li
          key={guesses + '' + c}
          className="box"
          style={{ backgroundColor: 'rgb(79, 222, 93)' }}
        >
          {guessedWord[c]}
        </li>
      );
    } else if (comparedWordsArray[c].result === 'incorrect') {
      letterArr.push(
        <li
          key={guesses + '' + c}
          className="box"
          style={{ backgroundColor: 'rgb(251, 42, 42)' }}
        >
          {guessedWord[c]}
        </li>
      );
    } else if (comparedWordsArray[c].result === 'misplaced') {
      letterArr.push(
        <li
          key={guesses + '' + c}
          className="box"
          style={{ backgroundColor: 'rgb(79, 108, 222)' }}
        >
          {guessedWord[c]}
        </li>
      );
    }

    if (c === comparedWordsArray.length - 1) {
      let keyNr = c + 1;
      letterArr.push(<br key={guesses + '' + keyNr}></br>);
    }
  }

  return letterArr;
}
