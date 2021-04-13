import express from "express";
const userRouter = express.Router();
import auth from "../middleware/auth"
import { signin, signup, updateToken } from "../controllers/user";

userRouter.post("/signin", signin);
userRouter.post("/signup", signup);
userRouter.patch("/updateToken", auth, updateToken)

export default userRouter;