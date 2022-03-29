import app from './src/app.js';

const port = 5081;

app.listen(port, () => {
  console.log(`app is listening to ${port}`);
});
