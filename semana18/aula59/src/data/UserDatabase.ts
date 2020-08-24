import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "User_Arq";

  public async createUser(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
  ): Promise<void> {
    await this.getConnection()(UserDatabase.TABLE_NAME).insert({
      id,
      name,
      email,
      password,
      role,
    });
  }

  public async getUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()(UserDatabase.TABLE_NAME)
      .select()
      .where({ email });
    return result[0];
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getConnection()(UserDatabase.TABLE_NAME)
      .select()
      .where({ id });
    return result[0];
  }
}
