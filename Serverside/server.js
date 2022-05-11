import app from './src/app.js';
import mongoose from 'mongoose';
const port = 5080;

app.listen(port, () => {
  console.log(`app is listening to ${port}`);
});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty2 = new Cat({ name: 'Luna' });
// kitty2.save().then(() => console.log('meow'));

// const cats = await Cat.find();
// console.log(cats);

//NEDAN KAN VARA I EN ANNAN FIL
async function run() {
  const highscores = mongoose.model('highscores', {
    Time: Number,
    Guesses: Number,
    Letters: Number,
    Unik: String,
    Name: String,
  });

  const player = new highscores({
    Time: 1,
    Guesses: 1,
    Letters: 4,
    Unik: 'nej',
    Name: 'John Doe',
  });
  // player.save().then(() => console.log('saved'));
  // const kitty2 = new Cat({ name: 'Luna' });
  // kitty2.save().then(() => console.log('meow'));

  const highscore = await highscores.find();
  console.log(highscore);
}

// run();
// const user = highscores.find();
// console.log(user);
