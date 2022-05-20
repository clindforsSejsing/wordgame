function sortHighscore(latestUser) {
  console.log('hellojs');
  //default- get the latest user on top.
}

function sortHighscoreByTime(bestTime) {
  console.log('time is all');
  //second sort: sort by time in s
}

function sortHighscoreByNrLetters(numberOfLetters, bestTime) {
  console.log('letters is tha shit, timing to');
  // nr of letters + snabbast
}

function sortHighscoreByNrOfGuesses(amountOfGuesses, bestTime) {
  console.log('amount of guesses rules, timing to');
  // nr of guesses + snabbast
}

function sortHighscoreByUnikLetters(unikLetters, bestTime) {
  console.log('unik letters is so hard, timing is everything');
  // unik letters + snabbast
}

export {
  sortHighscore,
  sortHighscoreByTime,
  sortHighscoreByNrLetters,
  sortHighscoreByNrOfGuesses,
  sortHighscoreByUnikLetters,
};
//first sort: latest in, first out.

//radio-boxes? checkboxes?

// nr of guesses, minst först + snabbast tid
//sort by unik, snabbast tid

//fyra functioner- en för varje val av filtrering.. Sedan förankra i handlebars med hänvisn till functionen. ev egen handlebars-sida?
