import 'dotenv/config';
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoString = process.env.DATABASE_URI;
    await mongoose.connect(mongoString);
    console.log('Mongodb Connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
