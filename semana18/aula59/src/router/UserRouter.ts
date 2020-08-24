import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

userRouter.put("/signup", new UserController().signup);
userRouter.post("/login", new UserController().login);
