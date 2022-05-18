import express from 'express';
import routes from '../routes/routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5081',
    methods: ['GET', 'POST'],
  })
);

app.use('/', routes);
app.use('/rules', routes);
app.use('/api/userchoice', routes);
app.use('/api/userchoice/:id', routes);
app.use('/api/userchoice/:id/unic?', routes);
app.use('/highscores', routes);
app.use('/api/highscores', routes);

app.use(express.static('..word-game/build'));

export default app;
