import mongoose from "mongoose";

const server = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URL as string);
    console.log("Mongodb is connected :", connect.connection.host);
  } catch (error) {
    console.log(error);
  }
};

export default server;
