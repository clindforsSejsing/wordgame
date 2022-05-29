import express from 'express';
import { sortWords } from '../files/sortWords.js';
import { sortUnicWords } from '../files/sortUnicWords.js';
import fs from 'fs/promises';
import mongoose from 'mongoose';
import highscoreSchema from '../files/model.js';
import {
  getHighscores,
  secretWords,
  getHighscoresLetters,
  getHighscoresGuesses,
  getHighscoresUnik,
} from '../src/fetch.js';

const routes = express.Router();
routes.use(express.static('static'));
const highscores = mongoose.model('highscores', highscoreSchema);

routes.get('/', async (req, res) => {
  const list = await getHighscores();
  try {
    res.render('highscores', { list });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

routes.get('/letters', async (req, res) => {
  const bestLetters = await getHighscoresLetters();
  try {
    res.render('letters', { bestLetters });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

routes.get('/guesses', async (req, res) => {
  const bestGuesses = await getHighscoresGuesses();
  try {
    res.render('guesses', { bestGuesses });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

routes.get('/unik', async (req, res) => {
  const UnikLetters = await getHighscoresUnik();
  try {
    res.render('unik', { UnikLetters });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// routes.use(express.static('./static'));
// routes.use('./static/rules1.png', express.static('images'));

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
    const data = await highscores.find().sort({ time: 1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

routes.get('/api/highscores/letters', async (req, res) => {
  try {
    const data = await highscores.find().sort({ letters: -1, time: 1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

routes.get('/api/highscores/guesses', async (req, res) => {
  try {
    const data = await highscores.find().sort({ guesses: 1, time: 1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

routes.get('/api/highscores/unik', async (req, res) => {
  try {
    const data = await highscores.find().sort({ unik: 1, time: 1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default routes;
