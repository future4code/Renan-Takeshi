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
    await BaseDatabase.destroyConnection();
  }

  public async getUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()(UserDatabase.TABLE_NAME)
      .select()
      .where({ email });
    await BaseDatabase.destroyConnection();
    return result[0];
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getConnection()(UserDatabase.TABLE_NAME)
      .select()
      .where({ id });
    await BaseDatabase.destroyConnection();
    return result[0];
  }

  public async getAllUsers(): Promise<any[]> {
    const result = await this.getConnection()(UserDatabase.TABLE_NAME).select();
    await BaseDatabase.destroyConnection();
    return result;
  }

  public async deleteUser(id: string): Promise<void> {
    await this.getConnection()(UserDatabase.TABLE_NAME).del().where({ id });
    await BaseDatabase.destroyConnection();
  }
}
