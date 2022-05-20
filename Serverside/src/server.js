import app from './app.js';
import { connectDB } from '../config/db.js';
const port = process.env.PORT || 5080;

connectDB();

app.listen(port, () => {
  console.log(`app is listening to ${port}`);
});
