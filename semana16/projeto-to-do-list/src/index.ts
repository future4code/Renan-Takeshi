import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/****************************** Initial Config ******************************/

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

const validadeString = (str: string) => str && str.replace(/\s/g, "");

/****************************** Exercicio 01 ********************************/

app.put("/user", async (req: Request, res: Response) => {
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
    validadeString(name) &&
    validadeString(nickname) &&
    validadeString(email)
  ) {
    await connection.raw(`
        INSERT INTO user VALUE 
            (UUID_TO_BIN(UUID()), '${name.trim()}', '${nickname.trim()}', '${email.trim()}')
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
  const response = await connection.raw(`
        SELECT BIN_TO_UUID(id) as id, nickname  
        FROM user 
        WHERE "${id}" = BIN_TO_UUID(id)
    `);
  if (response[0][0]) {
    return response[0][0];
  } else {
    throw { message: "Usuario nao encontrado" };
  }
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
  name: string,
  nickname: string
): Promise<void> {
  if (validadeString(name) || validadeString(nickname)) {
    const response = await connection.raw(`
        UPDATE user
        SET ${name ? `name = '${name.trim()}'` : ""}
            ${nickname && name ? ", " : ""}
            ${nickname ? `nickname = '${nickname.trim()}'` : ""} 
        WHERE "${id}" = BIN_TO_UUID(id)
    `);
    if (!response[0].affectedRows) throw { message: "Usuario nao encontrado" };
  } else throw { message: "Dados do body invalidos" };
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
  if (
    validadeString(userId) &&
    validadeString(title) &&
    validadeString(description) &&
    validadeString(limitDate)
  ) {
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
  } else throw { message: "User id not on query params" };
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
  } else throw { message: "Missing query parameters" };
}

/****************************** Exercicio 09 ********************************/

app.post("/task/responsible", async (req: Request, res: Response) => {
  try {
    if (
      validadeString(req.body.task_id) &&
      validadeString(req.body.responsible_user_id)
    ) {
      await assingnUserToTask(req.body.task_id, req.body.responsible_user_id);
      res.status(200).send({
        message: "Success",
      });
    } else if (
      validadeString(req.body.task_id) &&
      req.body.responsible_user_ids.length
    ) {
      await assingnMultipleUsersToTask(
        req.body.task_id,
        req.body.responsible_user_ids
      );
      res.status(200).send({
        message: "Success",
      });
    } else throw { message: "Missing or incorrect body parameters" };
  } catch (error) {
    res
      .status(400)
      .send(error.sqlMessage ? { message: error.sqlMessage } : error);
  }
});

async function assingnUserToTask(
  taskId: string,
  userId: string
): Promise<void> {
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
    const task = await connection.raw(`
      SELECT BIN_TO_UUID(task.id) as id
      FROM task 
      WHERE BIN_TO_UUID(task.id) = '${taskId}'
    `);
    if (!task[0].length) throw { message: "Task not found" };
    const response = await connection.raw(`
        SELECT BIN_TO_UUID(user.id) AS id, user.nickname
        FROM task_user JOIN user ON task_user.user_id = user.id
        WHERE BIN_TO_UUID(task_user.task_id) = '${taskId}' 
    `);
    return response[0];
  } else throw { message: "Missing id value" };
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
      res.status(200).send({ message: "Task not found" });
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

app.post("/task/status/edit", async (req: Request, res: Response) => {
  try {
    if (validadeString(req.body.status) && validadeString(req.body.task_id)) {
      await updateTaskStatus(req.body.task_id, req.body.status);
      res.status(200).send({
        message: "Success single task",
      });
    } //else throw { message: "exercicio 12" };
    if (validadeString(req.body.status) && req.body.task_ids.length) {
      const response = await updateMultipleTasksStatus(
        req.body.task_ids,
        req.body.status
      );
      res.status(200).send(response);
    }
  } catch (error) {
    res
      .status(400)
      .send(error.sqlMessage ? { message: error.sqlMessage } : error);
  }
});

async function updateTaskStatus(id: string, status: string) {
  const response = await connection.raw(`
      UPDATE task t
      SET t.status = '${status}'
      WHERE BIN_TO_UUID(t.id) = '${id}'
    `);
  if (!response[0].affectedRows) throw { message: "Task not found" };
}

/****************************** Exercicio 13 ********************************/
app.get("/tasks", async (req: Request, res: Response) => {
  try {
    if (validadeString(req.query.status as string)) {
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
    } else throw { message: "Missing query" };
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
    const task = connection.raw(`
      SELECT BIN_TO_UUID(id) AS id
      FROM task
      WHERE BIN_TO_UUID(id) = '${taskId}'
    `);
    const user = connection.raw(`
      SELECT BIN_TO_UUID(id) AS id
      FROM user
      WHERE BIN_TO_UUID(id) = '${responsibleId}'
    `);

    const values = await Promise.all([task, user]);
    if (!values[0][0][0]) throw { message: "Task not found" };
    if (!values[1][0][0]) throw { message: "User not found" };

    const response = await connection.raw(`
      DELETE
      FROM task_user tu
      WHERE BIN_TO_UUID(tu.user_id) = '${responsibleId}'
      AND BIN_TO_UUID(tu.task_id) = '${taskId}'
    `);

    if (!response[0].affectedRows)
      throw { message: "User not assigned to task" };
  } else throw { message: "Missing ids." };
}

/****************************** Exercicio 16 ********************************/

async function assingnMultipleUsersToTask(taskId: string, usersIds: string[]) {
  const task = connection.raw(`
    SELECT BIN_TO_UUID(id) AS id
    FROM task
    WHERE BIN_TO_UUID(id) = '${taskId}'
  `);
  const users = connection.raw(`
    SELECT BIN_TO_UUID(id) AS id
    FROM user
    WHERE  ${usersIds.map((item) => `BIN_TO_UUID(id) = '${item}'`).join(" OR ")}
  `);

  const values = await Promise.all([task, users]);
  if (!values[0][0][0]) throw { message: "Task not found" };
  if (values[1][0].length < usersIds.length)
    throw { message: "One or more users not found" };

  await connection.raw(`
  INSERT INTO task_user VALUES
  ${usersIds
    .map((item) => `(UUID_TO_BIN('${taskId}'), UUID_TO_BIN('${item}'))`)
    .join(",")}
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

/****************************** Exercicio 18 ********************************/

async function updateMultipleTasksStatus(taskIds: string[], status: string) {
  const tasks = await Promise.all(
    taskIds.map((item) =>
      connection.raw(`
        SELECT BIN_TO_UUID(id) AS id
        FROM task
        WHERE BIN_TO_UUID(id) = '${item}'
      `)
    )
  );

  const taskNotFoundIndexes: number[] = [];
  tasks.forEach((item, idx) => {
    !item[0].length && taskNotFoundIndexes.push(idx);
  });

  const validTaskIds: string[] = taskIds.filter(
    (item: string, idx: number) => !taskNotFoundIndexes.includes(idx)
  );

  if (!validTaskIds.length) throw { message: "None of the ids are valid" };

  await connection.raw(`
    UPDATE task
    SET status = '${status}'
    WHERE  ${validTaskIds
      .map((item) => `BIN_TO_UUID(id) = '${item}'`)
      .join(" OR ")}
`);

  if (taskNotFoundIndexes.length) {
    const message = {
      message: "Updated valid tasks, but some ids were not valid",
      invalidIds: taskIds.filter((item: string, idx: number) =>
        taskNotFoundIndexes.includes(idx)
      ),
    };
    return message;
  }

  return { message: "All tasks updated sucefully" };
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
