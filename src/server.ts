import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import app from "./app";
import connectDB from "./db_connection/db.connect";

const port = process.env.PORT || 3000;

console.log(`Access Token Key : ${process.env.ACCESS_TOKEN_SECRET_KEY}
  Refresh Token Key : ${process.env.REFRESH_TOKEN_SECRET_KEY}
  Access token Expiry : ${process.env.ACCESS_TOKEN_EXPIRY}`);

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


  // console.log(process.env.ACCESS_KEY_SECRET);