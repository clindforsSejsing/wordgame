export function colorBoxFeedback(
  comparedWordsArray,
  letterArr,
  guessedWord,
  guesses
) {
  for (let c = 0; c < comparedWordsArray.length; c++) {
    if (comparedWordsArray[c].result === 'correct') {
      letterArr.push(
        <li key={guesses + '' + c} className="box" style={{ color: 'green' }}>
          {guessedWord[c]}
        </li>
      );
    } else if (comparedWordsArray[c].result === 'incorrect') {
      letterArr.push(
        <li key={guesses + '' + c} className="box" style={{ color: 'red' }}>
          {guessedWord[c]}
        </li>
      );
    } else if (comparedWordsArray[c].result === 'misplaced') {
      letterArr.push(
        <li key={guesses + '' + c} className="box" style={{ color: 'blue' }}>
          {guessedWord[c]}
        </li>
      );
    }

    if (c == comparedWordsArray.length - 1) {
      let keyNr = c + 1;
      letterArr.push(<br key={guesses + '' + keyNr}></br>);
    }
  }

  return letterArr;
}
