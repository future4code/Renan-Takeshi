import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

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

/**************************************************************/

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
    connection.raw(`
        INSERT INTO user VALUE 
        (UUID_TO_BIN(UUID()), '${name}', '${nickname}', '${email}')
    `);
  } else throw { message: "Todos os campos sao obrigatorios" };
}

/**************************************************************/

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

async function getUserById(id: string): Promise<any> {
  if (id.replace(" ", "")) {
    const response = await connection.raw(`
            SELECT BIN_TO_UUID(id) as id, nickname  
            FROM user 
            WHERE "${id}" = BIN_TO_UUID(id)
        `);
    return response[0][0];
  } else throw { message: "Todos os campos sao obrigatorios" };
}

/**************************************************************/

app.post("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    await editUser(req.params.id, req.body.name, req.body.nickname);
    res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    res
      .status(400)
      .send(error.sqlMessage ? { message: error.sqlMessage } : error);
  }
});

async function editUser(
  id: string,
  name?: string,
  nickname?: string
): Promise<void> {
  if (id.replace(" ", "") && (name || nickname)) {
    await connection.raw(`
            UPDATE user
            SET ${name ? `name = '${name}'` : ""}
                ${nickname && name ? ", " : ""}
                ${nickname ? `nickname = '${nickname}'` : ""} 
            WHERE "${id}" = BIN_TO_UUID(id)
        `);
  } else throw { message: "Pelo menos um!" };
}

/**************************************************************/

app.put("/task", async (req: Request, res: Response) => {
  try {
    await createTask(
      req.body.creatorUserId,
      req.body.title,
      req.body.description,
      req.body.limitDate
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

async function createTask(
  userId: string,
  title: string,
  description: string,
  limitDate: string
): Promise<void> {
  if (userId && title && description && limitDate) {
    await connection.raw(`
        INSERT INTO task VALUE(
            UUID_TO_BIN(UUID()),
            UUID_TO_BIN('${userId}'),
            '${title}',
            '${description}',
            'pending',
            '${limitDate.split("/").reverse().join("-")}'            
        )
    `);
  } else throw { message: "Todos os campos sao obrigatorios" };
}

/**************************************************************/

// app.get("/task/:id", async (req: Request, res: Response) => {
//   try {
//     const response = await getTaskById(req.params.id);
//     if (response) {
//       response.limitDate = (response.limitDate as Date)
//         .toISOString()
//         .split("T")[0]
//         .split("-")
//         .reverse()
//         .join("/");

//       res.status(200).send(response);
//     } else {
//       res.status(200).send({ message: "Tarefa nao encontrada" });
//     }
//   } catch (error) {
//     res
//       .status(400)
//       .send(error.sqlMessage ? { message: error.sqlMessage } : error);
//   }
// });

async function getTaskById(id: string): Promise<any> {
  if (id) {
    const response = await connection.raw(`
            SELECT BIN_TO_UUID(task.id) as taskId, title, description, limit_date as limitDate, status, BIN_TO_UUID(user.id) AS creatorUserId, user.nickname AS creatorUserNickname
            FROM task JOIN user ON BIN_TO_UUID(task.user_id) = BIN_TO_UUID(user.id)
            WHERE "${id}" = BIN_TO_UUID(task.id)
        `);
    return response[0][0];
  } else throw { message: "Quero id" };
}

/**************************************************************/

app.get("/users/all", async (req: Request, res: Response) => {
  try {
    const response = await getAllUsers();
    res.status(200).send({ users: response });
  } catch (error) {
    res
      .status(400)
      .send(error.sqlMessage ? { message: error.sqlMessage } : error);
  }
});

async function getAllUsers(): Promise<any> {
  const response = await connection.raw(`
    SELECT BIN_TO_UUID(id) AS id, nickname
    FROM user
  `);
  return response[0];
}

/**************************************************************/

app.get("/task", async (req: Request, res: Response) => {
  try {
    const response = await getTasksByUserId(req.query.creatorUserId as string);
    for (const task of response) {
      task.limitDate = (task.limitDate as Date)
        .toISOString()
        .split("T")[0]
        .split("-")
        .reverse()
        .join("/");
    }
    res.status(200).send({ tasks: response });
  } catch (error) {
    res
      .status(400)
      .send(error.sqlMessage ? { message: error.sqlMessage } : error);
  }
});

async function getTasksByUserId(id: string): Promise<any> {
  if (id) {
    const response = await connection.raw(`
              SELECT BIN_TO_UUID(task.id) as taskId, title, description, limit_date AS limitDate, BIN_TO_UUID(user.id) AS creatorUserId, status, user.nickname AS creatorUserNickname
              FROM task JOIN user ON BIN_TO_UUID(task.user_id) = BIN_TO_UUID(user.id)
              WHERE "${id}" = BIN_TO_UUID(user.id)
          `);
    return response[0];
  } else throw { message: "Quero id" };
}

/**************************************************************/

app.get("/user", async (req: Request, res: Response) => {
  try {
    const response = await searchUsers(req.query.query as string);
    res.status(200).send({ users: response });
  } catch (error) {
    res
      .status(400)
      .send(error.sqlMessage ? { message: error.sqlMessage } : error);
  }
});

async function searchUsers(query: string): Promise<any> {
  if (query) {
    const response = await connection.raw(`
                  SELECT BIN_TO_UUID(id) AS id, nickname
                  FROM user
                  WHERE user.nickname LIKE '%${query}%' 
                  OR user.email LIKE '%${query}%'        
              `);
    return response[0];
  } else throw { message: "Quero query" };
}

/**************************************************************/

app.post("/task/responsible", async (req: Request, res: Response) => {
  try {
    await assingUserToTask(req.body.task_id, req.body.responsible_user_id);
    res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    res
      .status(400)
      .send(error.sqlMessage ? { message: error.sqlMessage } : error);
  }
});

async function assingUserToTask(taskId: string, userId: string): Promise<void> {
  if (taskId && userId) {
    await connection.raw(`
                    INSERT INTO task_user VALUE
                    (UUID_TO_BIN('${taskId}'), UUID_TO_BIN('${userId}'))
    `);
  } else throw { message: "Quero IDs" };
}

/**************************************************************/

app.get("/task/:id/responsible", async (req: Request, res: Response) => {
  try {
    const response = await getUsersByTaskId(req.params.id);
    res.status(200).send({ users: response });
  } catch (error) {
    res
      .status(400)
      .send(error.sqlMessage ? { message: error.sqlMessage } : error);
  }
});

async function getUsersByTaskId(taskId: string): Promise<any> {
  if (taskId) {
    const response = await connection.raw(`
                    SELECT BIN_TO_UUID(user.id) AS id, user.nickname
                    FROM task_user JOIN user ON BIN_TO_UUID(task_user.user_id) = BIN_TO_UUID(user.id)
                    WHERE BIN_TO_UUID(task_user.task_id) = '${taskId}' 
    `);
    return response[0];
  } else throw { message: "Quero ID" };
}

/**************************************************************/

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const response = await getTaskByIdChallenge(req.params.id);
    if (response) {
      response.responsibleUsers = response.responsibleUsers
        .split(";")
        .map((item: string) => {
          const user = item.split(",");
          return { id: user[0], nickname: user[1] };
        });

      res.status(200).send(response);
    } else {
      res.status(200).send({ message: "Tarefa nao encontrada" });
    }
  } catch (error) {
    res
      .status(400)
      .send(error.sqlMessage ? { message: error.sqlMessage } : error);
  }
});

async function getTaskByIdChallenge(id: string): Promise<any> {
  if (id) {
    const response = await connection.raw(`
        SELECT BIN_TO_UUID(task.id) as taskId, title, description, limit_date as limitDate, status, BIN_TO_UUID(user.id) AS creatorUserId, user.nickname AS creatorUserNickname, 
        GROUP_CONCAT(BIN_TO_UUID(user.id),"," ,user.nickname SEPARATOR ";") as responsibleUsers
        FROM task JOIN user ON BIN_TO_UUID(task.user_id) = BIN_TO_UUID(user.id)
        JOIN task_user ON BIN_TO_UUID(task_user.task_id) = BIN_TO_UUID(task.id)
        WHERE '${id}' = BIN_TO_UUID(task.id)
        GROUP BY BIN_TO_UUID(task.id), title, description, limitDate, status, creatorUserId, creatorUserNickname;
    `);
    return response[0][0];
  } else throw { message: "Quero id" };
}