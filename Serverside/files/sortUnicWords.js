//import all words and sort them by unic
function sortUnicWords(choosenWord) {
  let aWord = choosenWord;
  for (let i = 0; i < aWord.length; i++) {
    for (let a = 0; a < aWord.length; a++) {
      if (i != a) {
        if (aWord[i] == aWord[a]) {
          return false;
        }
      }
    }
  }
  return true;
}

export { sortUnicWords };
