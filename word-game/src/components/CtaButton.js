// import React, { useState } from 'react';
// // import './CtaButton.css';
// import { UsedLettersFromUser } from './UsedLettersFromUser.js';
// import { compareWords } from './compareWords.js';

// function CtaButton(props) {
//   const [inputWord, setInputWord] = useState('');
//   const [theSecretWord, setTheSecretWord] = useState('');
//   ***const [blabla, setBlabla] = useState([]);

//   const handleRenderLetters = async (e) => {
//     console.log('nu');
//     let secretWord = props.word;
//     let guessedWord = props.letters;
//     setInputWord(guessedWord);
//     setTheSecretWord(secretWord);
//     let arr = compareWords(guessedWord, secretWord);
// **********
//     setBlabla(newSuperFunction(arr, blabla, guessedWord));
// ************
//   };

//   ***const myBlablaSetter = (bla) => {
//     setBlabla(bla);
//   };

//   return (
//     <>
//       {/* {guessedLetters} */}
//       <button className="btn__Guess" onClick={handleRenderLetters}>
//         Gissa!
//       </button>
//       <div id="gameBoxTwo">
//         <div id="secondInput">
//           <UsedLettersFromUser
//             inputWord={inputWord}
//             theSecretWord={theSecretWord}
//             onSaveCorrectWord={onSaveCorrectWordDataHandler}
//             onChange={handleResult}
//            *** arrayState={blabla}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// function newSuperFunction(arr, letterArr, guessedWord) {
//   for (let c = 0; c < arr.length; c++) {
//     if (arr[c].result === 'correct') {
//       letterArr.push(
//         <li
//           key={c + Math.floor(Math.random() * 100000)}
//           className="box"
//           style={{ color: 'green' }}
//         >
//           {guessedWord[c]}
//         </li>
//       );
//     } else if (arr[c].result === 'incorrect') {
//       letterArr.push(
//         <li
//           key={c + Math.floor(Math.random() * 100000)}
//           className="box"
//           style={{ color: 'red' }}
//         >
//           {guessedWord[c]}
//         </li>
//       );
//     } else if (arr[c].result === 'misplaced') {
//       letterArr.push(
//         <li
//           key={c + Math.floor(Math.random() * 100000)}
//           className="box"
//           style={{ color: 'blue' }}
//         >
//           {guessedWord[c]}
//         </li>
//       );
//     }
//   }
//   letterArr.push(<br key={Math.floor(Math.random() * 1000000)}></br>);
//   return letterArr;
// }

// export { CtaButton };
