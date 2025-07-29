import { Router } from "express";
import loginChecker from "./auth.controller";

const router = Router();


router.route("/login").post(loginChecker);


export default router;