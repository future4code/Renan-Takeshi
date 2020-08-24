import { BaseDataBase } from "./BaseDatabase";
import { IdGenerator } from "../services/IdGenerator";

export class UserDatabase extends BaseDataBase {
    tableName: string = "User_arq";
    private idGenerator = new IdGenerator();

    public async signup(name: string, email: string) {
        try {
            const id = this.idGenerator.generate();
            await super.getConnection().raw(`
             INSERT INTO User_arq(id, name, email)
             VALUES
                 (
                     "${id}",
                     "${name}",
                "${email}"
                )
                `);
            } catch (err) {
                throw new Error(err.message);
            }
    }

    public async approve(id: string){
        const queryData = await this.getConnection().raw(`
        SELECT * FROM User_arq
        WHERE id = "${id}"
        `);
    
        const data = queryData[0][0];
        console.log(data);
    
        if(data.is_approved === 1){
          throw new Error("Usuário já aprovado!");
        }
    
        await this.getConnection().raw(`
        UPDATE User_arq
        SET is_approved = 1
        WHERE id = "${id}"
        `);
    }

    public async getUserById(id: string){

        const result = await this.getConnection().raw(`
        SELECT * FROM User_arq
        WHERE id = "${id}"
        `);
    
        const data = result[0][0];
        console.log(data);
        if(data.is_approved === 0){
          throw new Error("Usuário não aprovado");
        }

        return data;
    }
}