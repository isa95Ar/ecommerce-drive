import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });

export default connectMongo;
