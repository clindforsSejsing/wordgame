//import all words and sort them by unic
function sortUnicWords(choosenWord) {
  console.log('hello' + choosenWord);
  let aWord = choosenWord; //.split(',');
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
// console.log(aWord + 'rackarns aword');

//ett ord, antingen vald längd eller randomiserat. Gör till enstaka bokstäver, loopa igenom och jämför om bokstäverna återkommer. Om de återkommer- byt ord till nästa ord. Om det inte finns ngt randomiserat filtrerat ord som passar- kör loop på nytt med samma ord.

export { sortUnicWords };
