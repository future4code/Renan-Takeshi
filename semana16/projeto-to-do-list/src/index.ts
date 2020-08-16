import knex from "knex";
import express, { Request, Response, response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/****************************** Exercicio 11 ********************************/

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

/****************************** Exercicio 01 ********************************/

app.post("/user", async (req: Request, res: Response) => {
  try {
    await createUser(req.body.name, req.body.nickname, req.body.email);
    res.status(200).send({
      message: "Success",
    });
  } catch (error) {
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
    await connection.raw(`
        INSERT INTO user VALUE 
            (UUID_TO_BIN(UUID()), '${name}', '${nickname}', '${email}')
    `);
  } else throw { message: "Todos os campos sao obrigatorios" };
}

/****************************** Exercicio 02 ********************************/

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

/****************************** Exercicio 03 ********************************/

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

/****************************** Exercicio 04 ********************************/

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

/****************************** Exercicio 05 ********************************/

async function getTaskById(id: string): Promise<any> {
  if (id) {
    const response = await connection.raw(`
        SELECT BIN_TO_UUID(task.id) as taskId, title, description, limit_date as limitDate, status, BIN_TO_UUID(user.id) AS creatorUserId, user.nickname AS creatorUserNickname
        FROM task JOIN user ON task.user_id = user.id
        WHERE "${id}" = BIN_TO_UUID(task.id)
    `);
    return response[0][0];
  } else throw { message: "Quero id" };
}

/****************************** Exercicio 06 ********************************/

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

/****************************** Exercicio 07 ********************************/

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
        SELECT 
            BIN_TO_UUID(task.id) as taskId, 
            title, 
            description, 
            limit_date AS limitDate, 
            BIN_TO_UUID(user.id) AS creatorUserId, 
            status, 
            user.nickname AS creatorUserNickname
        FROM task JOIN user ON task.user_id = user.id
        WHERE BIN_TO_UUID(user.id) = '${id}'
    `);
    return response[0];
  } else throw { message: "Quero id" };
}

/****************************** Exercicio 08 ********************************/

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

/****************************** Exercicio 09 ********************************/

app.post("/task/responsible", async (req: Request, res: Response) => {
  try {
    if (req.body.task_id && req.body.responsible_user_id) {
      await assingUserToTask(req.body.task_id, req.body.responsible_user_id);
      res.status(200).send({
        message: "Success",
      });
    } else if (req.body.task_id && req.body.responsible_user_ids.length) {
      await assingMultipleUsersToTask(
        req.body.task_id,
        req.body.responsible_user_ids
      );
      res.status(200).send({
        message: "Success",
      });
    } else throw { message: "Quero IDs" };
  } catch (error) {
    res
      .status(400)
      .send(error.sqlMessage ? { message: error.sqlMessage } : error);
  }
});

async function assingUserToTask(taskId: string, userId: string): Promise<void> {
  await connection.raw(`
        INSERT INTO task_user VALUE
        (UUID_TO_BIN('${taskId}'), UUID_TO_BIN('${userId}'))
    `);
}

/****************************** Exercicio 10 ********************************/

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
        FROM task_user JOIN user ON task_user.user_id = user.id
        WHERE BIN_TO_UUID(task_user.task_id) = '${taskId}' 
    `);
    return response[0];
  } else throw { message: "Quero ID" };
}

/****************************** Exercicio 11 ********************************/

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const response = await getTaskByIdChallenge(req.params.id);
    if (response.taskId) {
      response.limitDate = (response.limitDate as Date)
        .toISOString()
        .split("T")[0]
        .split("-")
        .reverse()
        .join("/");

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
    const creatorUser = connection.raw(`
        SELECT 
            BIN_TO_UUID(task.id) AS taskId,
            task.title,
            task.description,
            task.limit_date AS limitDate,
            BIN_TO_UUID(user.id) as creatorUserId, 
            user.nickname as creatorUserNickname
        FROM task JOIN user ON task.user_id = user.id
        WHERE BIN_TO_UUID(task.id) = '${id}'
      `);
    const responsibleUsers = connection.raw(`
        SELECT 
            BIN_TO_UUID(task_user.user_id) AS id,
            user.nickname
        FROM user JOIN task_user ON user.id = task_user.user_id
        WHERE BIN_TO_UUID(task_user.task_id) = '${id}'
    `);
    const values = await Promise.all([creatorUser, responsibleUsers]);
    return { ...values[0][0][0], responsibleUsers: values[1][0] };
  } else throw { message: "Missing task id value." };
}

/****************************** Exercicio 12 ********************************/

app.post("/task/:id/status/edit", async (req: Request, res: Response) => {
  try {
    await updateTaskStatus(req.params.id, req.body.status);
    res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    res
      .status(400)
      .send(error.sqlMessage ? { message: error.sqlMessage } : error);
  }
});
async function updateTaskStatus(id: string, status: string) {
  if (id && status) {
    await connection.raw(`
      UPDATE task t
      SET t.status = '${status}'
      WHERE BIN_TO_UUID(t.id) = '${id}'
    `);
  } else throw { message: "Missing task id or status value." };
}

/****************************** Exercicio 13 ********************************/
app.get("/tasks", async (req: Request, res: Response) => {
  try {
    if (req.query.status) {
      const response = await getTaskByStatus(req.query.status as string);
      for (const task of response) {
        task.limitDate = (task.limitDate as Date)
          .toISOString()
          .split("T")[0]
          .split("-")
          .reverse()
          .join("/");
      }
      res.status(200).send({ tasks: response });
    } else if (req.query.query) {
      const response = await searchTasks(req.query.query as string);
      for (const task of response) {
        task.limitDate = (task.limitDate as Date)
          .toISOString()
          .split("T")[0]
          .split("-")
          .reverse()
          .join("/");
      }
      res.status(200).send({ tasks: response });
    } else throw { message: "Quero query" };
  } catch (error) {
    res
      .status(400)
      .send(error.sqlMessage ? { message: error.sqlMessage } : error);
  }
});

async function getTaskByStatus(status: string) {
  const response = await connection.raw(`
      SELECT 
        BIN_TO_UUID(t.id) AS taskId, 
        t.title, 
        t.description, 
        t.limit_date AS limitDate,
        BIN_TO_UUID(t.user_id) AS creatorUserId,
        u.nickname AS creatorUserNickname
      FROM task t JOIN user u ON t.user_id = u.id
      WHERE t.status = '${status}'
    `);
  return response[0];
}

/****************************** Exercicio 14 ********************************/

app.get("/tasks/delayed", async (req: Request, res: Response) => {
  try {
    const response = await getDelayedTasks();
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

async function getDelayedTasks() {
  const response = await connection.raw(`
    SELECT 
      BIN_TO_UUID(t.id) AS taskId,
      t.title,
      t.description,
      t.limit_date AS limitDate,
      BIN_TO_UUID(t.user_id) AS creatorUserId,
      u.nickname AS creatorUserNickname
    FROM task t JOIN user u ON t.user_id = u.id
    WHERE t.limit_date < CURDATE()
  `);
  return response[0];
}

/****************************** Exercicio 15 ********************************/

app.post(
  "/task/:taskId/responsible/:responsibleId",
  async (req: Request, res: Response) => {
    try {
      await removeResponsibleFromTask(
        req.params.taskId,
        req.params.responsibleId
      );
      res.status(200).send({ message: "Sucess" });
    } catch (error) {
      res
        .status(400)
        .send(error.sqlMessage ? { message: error.sqlMessage } : error);
    }
  }
);

async function removeResponsibleFromTask(
  taskId: string,
  responsibleId: string
) {
  if (taskId && responsibleId) {
    await connection.raw(`
      DELETE
      FROM task_user tu
      WHERE BIN_TO_UUID(tu.user_id) = '${responsibleId}'
      AND BIN_TO_UUID(tu.task_id) = '${taskId}'
    `);
  } else throw { message: "Missing ids." };
}

/****************************** Exercicio 16 ********************************/

async function assingMultipleUsersToTask(taskId: string, usersIds: string[]) {
  await connection.raw(`
  INSERT INTO task_user VALUES
  ${usersIds.map(
    (item) => `(UUID_TO_BIN('${taskId}'), UUID_TO_BIN('${item}'))`
  )}
`);
}

/****************************** Exercicio 17 ********************************/

async function searchTasks(query: string): Promise<any> {
  const response = await connection.raw(`
        SELECT 
          BIN_TO_UUID(t.id) AS taskId,
          t.title,
          t.description,
          t.limit_date AS limitDate,
          BIN_TO_UUID(t.user_id) as creatorUserId,
          u.nickname AS creatorUserNickname
        FROM task t JOIN user u ON t.user_id = u.id
        WHERE t.title LIKE '%${query}%' OR t.description LIKE '%${query}%'      
    `);
  return response[0];
}

/****************************** Exercicio 19 ********************************/

app.delete("/task/:id", async (req: Request, res: Response) => {
  try {
    await deleteTask(req.params.id);
    res.status(200).send({ message: "Sucess" });
  } catch (error) {
    res
      .status(400)
      .send(error.sqlMessage ? { message: error.sqlMessage } : error);
  }
});

async function deleteTask(taskId: string) {
  if (taskId) {
    await connection.raw(`
        DELETE
        FROM task t
        WHERE BIN_TO_UUID(t.id) = '${taskId}'
    `);
  } else throw { message: "Missing task id" };
}

/****************************** Exercicio 20 ********************************/

app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    await deleteUser(req.params.id);
    res.status(200).send({ message: "Sucess" });
  } catch (error) {
    res
      .status(400)
      .send(error.sqlMessage ? { message: error.sqlMessage } : error);
  }
});

async function deleteUser(id: string) {
  if (id) {
    await connection.raw(`
      DELETE
      FROM user u
      WHERE BIN_TO_UUID(u.id) = '${id}'
    `);
  } else throw { message: "Missing user id" };
}
