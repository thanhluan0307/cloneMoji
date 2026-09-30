import mongoose from "mongoose";

export const connectDB = async () => {
  const connectionString = process.env.MONGODB_CONNECTIONSTRING;

  if (!connectionString) {
    throw new Error("MONGODB_CONNECTIONSTRING is not defined in .env");
  }

  const connection = await mongoose.connect(connectionString);

  console.log(`MongoDB connected: ${connection.connection.host}`);
  return connection;
};
