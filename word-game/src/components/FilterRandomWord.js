import "./FilterRandomWord.css";

//Get the array of words and sort them out by numbers of letters.

function FilterRandomWord() {
  // (listOfWords, nrOfLetters)

  //   let wordArray = listOfWords;

  //   if (nrOfLetters == 4) {
  //     wordArray = wordArray.filter(filter4Words);
  //   } else if (nrOfLetters == 5) {
  //     wordArray = wordArray.filter(filter5Words);
  //   } else if (nrOfLetters == 6) {
  //     wordArray = wordArray.filter(filter6Words);
  //   } else if (nrOfLetters == 7) {
  //     wordArray = wordArray.filter(filter7Words);
  //   }

  //   return wordArray[Math.floor(Math.random() * wordArray.length)];
  // }

  // function filter4Words(word) {
  //   return word.length == 4;
  // }

  // function filter5Words(word) {
  //   return word.length == 5;
  // }

  // function filter6Words(word) {
  //   return word.length == 6;
  // }

  // function filter7Words(word) {
  //   return word.length == 7;

  return (
    <>
      <div className="rowOfRadioBtns">
        <input type="radio" id="allwords" name="words" value="" />
        <label for="allwords">Randomiserat val.</label>
        <input type="radio" id="fourletterword" name="words" value="" />
        <label for="fourletterword">Fyra Bokstäver</label>
        <input type="radio" id="fiveletterword" name="words" value="" />
        <label for="fiveletterword">Fem Bokstäver</label>
        <input type="radio" id="sixletterword" name="words" value="" />
        <label for="sixletterword">Sex Bokstäver</label>
        <input type="radio" id="sevenletterword" name="words" value="" />
        <label for="sevenletterword">Sju Bokstäver</label>
        <input type="button" value="Ladda nytt ord" id="refreshButton" />
      </div>
    </>
  );
}

export { FilterRandomWord };
