import mongoose from "mongoose";
import ApiError from "../utilitys/ApiError.utility.js";

const connectDB = async (): Promise<void> => {      //here i have returning string before , but this function return nothing , so void
  try {
    const dbConnect = await mongoose.connect(
      `${process.env.DB_CONNECTION_URL}/ecommerce_data`
    );

    if (!dbConnect)
      throw new ApiError(500, "Server Side Error occured during DB connection");

    console.log("DB connected Successfully");
    console.log(dbConnect.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
