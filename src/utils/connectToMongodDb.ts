import mongoose, { connect } from 'mongoose';
import 'dotenv/config';

const URL = process.env.MONGODB_URL as string;

function connectToMongoDB(url = URL) {
  return mongoose
    .connect(url)
    .then((_) => {
      console.log('connected to MongoDB');
    })
    .catch((error) => {
      console.log('error connecting to MongoDB:', error.message);
    });
}

export default connectToMongoDB;
