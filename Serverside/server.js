import app from './src/app.js';
import 'dotenv/config';
const port = process.env.PORT;
// import highscore_schema from './schema';

import mongoose from 'mongoose';

export const mongoString = process.env.DATABASE_URI;
// console.log(process.env.DATABASE_URI);
// console.log(process.env.PORT);

await mongoose.connect(mongoString);
const database = mongoose.connection;
if (!mongoString) {
  console.log('failed to connect db');
}

app.listen(port, () => {
  console.log(`app is listening to ${port}`);
});

//NEDAN KAN VARA I EN ANNAN FIL
// async function run() {
//   const highscores = mongoose.model('highscores', {
//     Time: Number,
//     Guesses: Number,
//     Letters: Number,
//     Unik: String,
//     Name: String,
//   });

// const player = new highscores({
//   Time: 1,
//   Guesses: 1,
//   Letters: 4,
//   Unik: 'nej',
//   Name: 'Marge Simpson',
// });
// player.save().then(() => console.log('saved'));

//   const highscore = await highscores.find();
//   console.log(highscore);
// }

// run();
