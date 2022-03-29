import express from 'express';
// import fetch from "node-fetch";
import routes from '../routes/routes.js';

const app = express();

app.use('/', routes);
app.use('/test', routes);
app.use('/api/userchoice', routes);
app.use('/api/userchoice/:id', routes);
app.use('/api/userchoice/:id/unic?', routes);

// app.use("/src", express.static("./src"));

export default app;
