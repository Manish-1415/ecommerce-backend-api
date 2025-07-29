import express from "express";

const app = express();


app.use(express.json());
// app.use(express.static());

import registerRouter from "./modules/user/user.route";
import loginRouter from "./modules/auth/auth.route";

app.use("/api/v1/users", registerRouter);

app.use("/api/v1/users", loginRouter);

export default app;