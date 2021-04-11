import express from "express";
const userRouter = express.Router();

import { signin, signup, updateToken } from "../controllers/user";

userRouter.post("/signin", signin);
userRouter.post("/signup", signup);
userRouter.post("/updateToken", updateToken)

export default userRouter;