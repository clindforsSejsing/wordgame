---

To start:

cd Serverside, npm install, npm start. To start test: npm test.

cd word-game, npm install, npm build/npm start. 

You will need a .env-file:

PORT= 5080

DATABASE_URI= secret

---

#API-routs:

- -/api/highscores
- -/api/userchoice/
- -/api/userchoice/:id
- -/api/userchoice/:id/unic?

#Routs

- / (startpage)

- /highscores
  ----(fastest time first, otherwise no sorting in highscore result)

- /highscores/letters----
  (filtred highscore result -biggest amount of letters, fastest time)

- /highscores/guesses---- (filtered highscore result- least amount of guesses, fastest time)

- /highscores/unik---- (filtered highscore result- unik letterwords first and the fastest time)

- /rules---- (static page, contains rules for the game)

---
