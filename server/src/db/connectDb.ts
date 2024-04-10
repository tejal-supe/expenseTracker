import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URL as string);
    console.log("Connection to mongoDb is successful", connect.connection.host);
  } catch (error) {
    console.log(error);
  }
};
export default connectMongoDb;
