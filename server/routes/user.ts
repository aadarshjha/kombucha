import express from "express";
const userRouter = express.Router();

import { signin, signup } from "../controllers/user";

userRouter.post("/signin", signin);
userRouter.post("/signup", signup);

export default userRouter;