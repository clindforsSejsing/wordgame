import app from './src/app.js';
import 'dotenv/config';
const port = process.env.PORT || 5080;

import mongoose from 'mongoose';

export const mongoString = process.env.DATABASE_URI;

await mongoose.connect(mongoString);
const database = mongoose.connection;
if (!mongoString) {
  console.log('failed to connect db');
}

app.listen(port, () => {
  console.log(`app is listening to ${port}`);
});
