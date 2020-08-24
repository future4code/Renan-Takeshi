import knex from "knex";
import Knex from "knex";


export abstract class BaseDataBase{

    abstract tableName: string;
    
    getConnection(): Knex{
        return knex({
            client: "mysql",
            connection: {
              host: process.env.DB_HOST,
              port: Number(process.env.DB_PORT || "3306"),
              user: process.env.DB_USER,
              password: process.env.DB_PASS,
              database: process.env.DB_DATABASE_NAME
            }
          })
    }
}