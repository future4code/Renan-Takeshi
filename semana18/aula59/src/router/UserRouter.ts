import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

userRouter.put("/signup", new UserController().signup);
userRouter.post("/login", new UserController().login);
userRouter.get("/all", new UserController().getAll);
userRouter.delete("/:id", new UserController().deleteUser);
