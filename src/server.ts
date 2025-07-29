import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import app from "./app";
import connectDB from "./db_connection/db.connect";

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    const server = app.listen(port, () => {
      console.log(`Server is started on ${port} Port`);
    });

    server.on("error", (error) => {
      console.log(error);
    });
  })
  .catch((err) => {
    console.log(err);
  });
