import express from 'express';
// import fetch from "node-fetch";
import routes from '../routes/routes.js';
// import connectDB from '../config/db';

const app = express();

app.use('/', routes);
app.use('/rules', routes);
app.use('/api/userchoice', routes);
app.use('/api/userchoice/:id', routes);
app.use('/api/userchoice/:id/unic?', routes);
app.use('/highscore', routes);
app.use('/api/highscore', routes);

app.use(express.static('..word-game/build'));

export default app;
