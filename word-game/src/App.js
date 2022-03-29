// import React, { useState } from 'react';

import { FilterRandomWord } from './components/FilterRandomWord';
import { Keyboard } from './components/Keyboard';
import { LettersFromUser } from './components/LettersFromUser';
import { WrongWordsList } from './components/WrongWordsList';
import Winnings from './components/Winnings';

// const fetchPost = async () => {
//   try {
//     const response = await fetch('/');
//     setPosts(response.data);
//   } catch (err) {
//     console.log('not working');
//   }
// };

const App = () => {
  // const [word, setWord] = useState('software');

  // const getWord = async () => {
  //   let result = await fetch('/api/userchoice' + word).then((body) =>
  //     setWord(body)
  //   );
  // };

  return (
    <div className="App">
      <h1>Wordgame</h1>
      <FilterRandomWord />
      {/* <FilterRandomWord onclick={FilterRandomWord} /> */}
      <Winnings />
      <LettersFromUser />
      <Keyboard />
      <WrongWordsList />
    </div>
  );
};
//import highscorelist when its done
export default App;
