import express from "express";

const app = express();


app.use(express.json());
// app.use(express.static());

import registerRouter from "./modules/user/user.route";

app.use("/api/v1/users", registerRouter);


export default app;