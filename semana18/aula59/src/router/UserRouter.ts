import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

userRouter.post("/", new UserController().signup);

userRouter.get("/:id", new UserController().getUserById);

userRouter.post("/approve", new UserController().approve);