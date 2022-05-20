import fetch from 'node-fetch';

const highscoreApi = 'http://localhost:5080/api/highscores';

const url =
  'https://raw.githubusercontent.com/clindforsSejsing/wordle/main/words.txt';

export async function getHighscores() {
  try {
    const response = await fetch(highscoreApi);
    const payload = await response.json();
    return payload;
  } catch (error) {
    console.log('Fetching url does not work.');
  }
}

//fetches wordslist from url
export async function secretWords() {
  try {
    const response = await fetch(url);
    const payload = await response.text();
    const wordslist = payload.split(',');
    return wordslist;
  } catch (error) {
    console.log('oh no! Fetching url does not work.');
  }
}

// export default {
//   secretWords: secretWords,
// };
