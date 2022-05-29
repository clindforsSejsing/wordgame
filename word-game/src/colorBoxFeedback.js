export function colorBoxFeedback(
  comparedWordsArray,
  letterArr,
  guessedWord,
  guesses
) {
  for (let c = 0; c < comparedWordsArray.length; c++) {
    if (comparedWordsArray[c].result === 'correct') {
      letterArr.push(
        <p
          key={guesses + '' + c}
          className="box box-border h-16 w-16 p-4 border-4 rounded-lg shadow-xl font-serif text-2xl bg-green-400 bg-green text-white"
        >
          {guessedWord[c]}
        </p>
      );
    } else if (comparedWordsArray[c].result === 'incorrect') {
      letterArr.push(
        <p
          key={guesses + '' + c}
          className=" box box-border h-16 w-16 p-4 border-4 rounded-lg shadow-xl font-serif text-2xl bg-red text-white"
        >
          {guessedWord[c]}
        </p>
      );
    } else if (comparedWordsArray[c].result === 'misplaced') {
      letterArr.push(
        <p
          key={guesses + '' + c}
          className="box box-border h-16 w-16 p-4 border-4 rounded-lg shadow-xl font-serif text-2xl bg-blue text-white"
        >
          {guessedWord[c]}
        </p>
      );
    }

    if (c === comparedWordsArray.length - 1) {
      let keyNr = c + 1;
      letterArr.push(
        <div
          key={guesses + '' + keyNr}
          style={{ height: '0', width: '100%' }}
        ></div>
      );
    }
  }

  return letterArr;
}
