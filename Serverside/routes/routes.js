import express from 'express';
import { secretWords } from '../src/api.js';
import { sortWords } from './sortWords.js';
import { sortUnicWords } from './sortUnicWords.js';

const routes = express.Router();

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

routes.get('/test', (req, res) => {
  res.send('/test just an exampel here');
});

export default routes;
