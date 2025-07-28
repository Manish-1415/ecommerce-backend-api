import mongoose from "mongoose";

const connectDB = async () : Promise<string> => {
    const dbConnect = await mongoose.connect(`${process.env.DB_CONNECTION_URL}/ecommerce_data`);

    if()
}



export default connectDB;