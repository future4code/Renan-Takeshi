import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
import { v4 } from "uuid";
import { UserController } from "./controller/UserController";
import { userRouter } from "./router/UserRouter";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/user", userRouter);


// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
