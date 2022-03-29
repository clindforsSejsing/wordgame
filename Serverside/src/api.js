import fetch from 'node-fetch';
const url =
  'https://raw.githubusercontent.com/clindforsSejsing/wordle/main/words.txt';

//fetches wordslist from url
export async function secretWords() {
  try {
    const response = await fetch(url);
    const payload = await response.text();
    const wordslist = payload.split(',');
    // console.log(wordslist);
    return wordslist;
  } catch (error) {
    console.log('oh no! Fetching url does not work.');
  }
}

//secretWords();

export default {
  secretWords: secretWords,
};
