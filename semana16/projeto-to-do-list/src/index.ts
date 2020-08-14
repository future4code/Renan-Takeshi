import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// app.get("/", testEndpoint);

async function testEndpoint(req: Request, res: Response): Promise<void> {
  try {
    const result = await connection.raw(`
      SELECT * FROM actor
    `);

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

app.post("/user", async (req: Request, res: Response) => {
  try {
    await createUser(req.body.name, req.body.nickname, req.body.email);
    res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    // const errno: number = error.errno;
    // const key: string = (error.sqlMessage as string).split(" ")[5];
    res
      .status(400)
      .send(error.sqlMessage ? { message: error.sqlMessage } : error);
  }
});

async function createUser(
  name: string,
  nickname: string,
  email: string
): Promise<void> {
  if (
    name.replace(" ", "") &&
    nickname.replace(" ", "") &&
    email.replace(" ", "")
  ) {
    const response = await connection.raw(`
        INSERT INTO user VALUE (UUID_TO_BIN(UUID(),true), '${name}', '${nickname}', '${email}')
    `);
    console.log(response[0].affectedRows);
  } else throw { message: "Todos os campos sao obrigatorios" };
}

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const response = await getUserById(req.params.id as string);
    res.status(200).send(response);
  } catch (error) {
    res
      .status(400)
      .send(error.sqlMessage ? { message: error.sqlMessage } : error);
  }
});

async function getUserById(id: string) {
  if (id.replace(" ", "")) {
    const response = await connection.raw(`
            SELECT BIN_TO_UUID(id) as id, nickname  
            FROM user 
            WHERE "${id}" = BIN_TO_UUID(ID)
        `);
    return response[0][0];
  } else throw { message: "Todos os campos sao obrigatorios" };
}

app.post("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    const response = await editUser(
      req.params.id,
      req.body.name,
      req.body.nickname
    );
    res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    res
      .status(400)
      .send(error.sqlMessage ? { message: error.sqlMessage } : error);
  }
});

async function editUser(id: string, name: string, nickname: string) {
  if (
    id.replace(" ", "") &&
    name.replace(" ", "") &&
    nickname.replace(" ", "")
  ) {
    const response = await connection.raw(`
            UPDATE user
            SET name = "${name}", nickname = "${nickname}"
            WHERE "${id}" = BIN_TO_UUID(id)
        `);
    console.log(response[0].affectedRows);
    return response[0].affectedRows;
  } else throw { message: "Todos os campos sao obrigatorios" };
}
