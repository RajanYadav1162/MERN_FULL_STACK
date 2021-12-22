import mongoose from 'mongoose';

const startConnection = async (MONGO_URI) => {
  await mongoose.connect(MONGO_URI);
};

export default startConnection;
