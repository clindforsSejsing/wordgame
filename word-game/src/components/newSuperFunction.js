export function newSuperFunction(arr, letterArr, guessedWord) {
  for (let c = 0; c < arr.length; c++) {
    if (arr[c].result === 'correct') {
      letterArr.push(
        <li
          key={c + Math.floor(Math.random() * 100000)}
          className="box"
          style={{ color: 'green' }}
        >
          {guessedWord[c]}
        </li>
      );
    } else if (arr[c].result === 'incorrect') {
      letterArr.push(
        <li
          key={c + Math.floor(Math.random() * 100000)}
          className="box"
          style={{ color: 'red' }}
        >
          {guessedWord[c]}
        </li>
      );
    } else if (arr[c].result === 'misplaced') {
      letterArr.push(
        <li
          key={c + Math.floor(Math.random() * 100000)}
          className="box"
          style={{ color: 'blue' }}
        >
          {guessedWord[c]}
        </li>
      );
    }
  }
  letterArr.push(<br key={Math.floor(Math.random() * 1000000)}></br>);
  return letterArr;
}
