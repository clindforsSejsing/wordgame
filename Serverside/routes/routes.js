import express, { response } from 'express';
import { secretWords } from '../src/api.js';
import { sortWords } from './sortWords.js';
import { sortUnicWords } from './sortUnicWords.js';
import fs from 'fs/promises';
import app from '../src/app.js';

const routes = express.Router();

routes.use(express.static('./static'));
routes.use('./static/rules1.png', express.static('images'));

routes.get('/', (req, res) => {
  res.status(200).send('startside');
});

routes.post('/', (req, res) => {
  res.send('you can now post to this endpoint...');
});

routes.get('/api/userchoice', async (req, res) => {
  res.status(200).send(await secretWords());
});

routes.get('/api/userchoice/:id', async (req, res) => {
  // console.log(req.params.id);
  const nrOfLettersWord = sortWords(await secretWords(), req.params.id);
  // console.log('a' + nrOfLettersWord + 'a');
  res.status(200).send(await nrOfLettersWord);
});

//if user chooses api/userchoice/1/unic? random unic word pops
routes.get('/api/userchoice/:id/unic?', async (req, res) => {
  let unicLetters = sortWords(await secretWords(), req.params.id);
  // console.log('unicLetters' + unicLetters);
  // const sortUnicLetters = sortUnicWords(await unicLetters);
  let isUnice = sortUnicWords(unicLetters);
  while (!isUnice) {
    unicLetters = sortWords(await secretWords(), req.params.id);
    isUnice = sortUnicWords(unicLetters);
  }
  // console.log('unicLetters' + unicLetters);
  res.status(200).send(unicLetters);
});

const infoPage = fs.readFile('./static/rules.html', 'utf-8', 'html', 'css');

routes.get('/rules', async (req, res) => {
  res.send(await infoPage);
});

routes.post('/highscore'),
  async (req, res) => {
    res.send();
  };

routes.get('/highscore', async (req, res) => {
  res.render('highscore');
});

export default routes;
