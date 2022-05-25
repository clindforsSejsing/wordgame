import mongoose from 'mongoose';
const { Schema } = mongoose;

const highscoreSchema = new Schema({
  time: Number,
  guesses: Number,
  letters: Number,
  unik: String,
  username: String,
});

export default highscoreSchema;
