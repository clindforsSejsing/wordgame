---

To start:

npm install

cd Serverside, npm start. To start test: npm test.

cd word-game, npm build/npm start

You will need a .env-file:

PORT= 5080

DATABASE_URI= secret

---

#API-routs:

-/api/highscores
-/api/userchoice/
-/api/userchoice/:id
-/api/userchoice/:id/unic?

#Routs

- / (startpage)

- /highscores
  ----(fastest time first, otherwise no sorting in highscore result)

- /highscores/letters----
  (filtred highscore result -fastest time, most letters)

- /highscores/guesses---- (filtered highscore result- fastest time, least amount of guesses)

- /highscores/unik---- (filtered highscore result- unik letterwords first and the fastest time)

- /rules---- (static page, contains rules for the game)

---
