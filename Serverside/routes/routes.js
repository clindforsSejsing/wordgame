import express from 'express';
import { secretWords } from '../src/api.js';
import { sortWords } from './sortWords.js';
import { sortUnicWords } from './sortUnicWords.js';
import fs from 'fs/promises';
import mongoose from 'mongoose';

import highscoreSchema from '../src/model.js';

const routes = express.Router();

routes.use(express.static('./static'));
routes.use('./static/rules1.png', express.static('images'));

routes.get('/', (req, res) => {
  res.status(200).send('startside');
});

routes.get('/api/userchoice', async (req, res) => {
  res.status(200).send(await secretWords());
});

routes.get('/api/userchoice/:id', async (req, res) => {
  const nrOfLettersWord = sortWords(await secretWords(), req.params.id);
  res.status(200).send(await nrOfLettersWord);
});

//if user chooses api/userchoice/1/unic? random unic word pops
routes.get('/api/userchoice/:id/unic?', async (req, res) => {
  let unicLetters = sortWords(await secretWords(), req.params.id);
  let isUnice = sortUnicWords(unicLetters);
  while (!isUnice) {
    unicLetters = sortWords(await secretWords(), req.params.id);
    isUnice = sortUnicWords(unicLetters);
  }
  res.status(200).send(unicLetters);
});

const infoPage = fs.readFile('./static/rules.html', 'utf-8', 'html', 'css');

routes.get('/rules', async (req, res) => {
  res.send(await infoPage);
});

const highscores = mongoose.model('highscores', highscoreSchema);

routes.post('/api/highscores', async (req, res) => {
  try {
    const data = new highscores({
      time: req.body.time,
      guesses: req.body.guesses,
      letters: req.body.letters,
      unik: req.body.unik,
      username: req.body.username,
    });
    data.save();
    const payload = await highscores.find();
    res.json(payload);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

routes.get('/api/highscores', async (req, res) => {
  try {
    const data = await highscores.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

routes.get('/highscores/', async (req, res) => {
  res.send('here is highscore shown ');
});

export default routes;
