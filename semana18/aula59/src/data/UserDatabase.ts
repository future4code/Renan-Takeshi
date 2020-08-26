import { BaseDatabase } from "./BaseDatabase";

export abstract class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "User_Arq";

  static async createUser(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
  ): Promise<void> {
    await super.getConnection()(UserDatabase.TABLE_NAME).insert({
      id,
      name,
      email,
      password,
      role,
    });
    await BaseDatabase.destroyConnection();
  }

  static async getUserByEmail(email: string): Promise<any> {
    const result = await super
      .getConnection()(UserDatabase.TABLE_NAME)
      .select()
      .where({ email });
    await BaseDatabase.destroyConnection();
    return result[0];
  }

  static async getAllUsers(): Promise<any[]> {
    const result = await super
      .getConnection()(UserDatabase.TABLE_NAME)
      .select();
    await BaseDatabase.destroyConnection();
    return result;
  }

  static async deleteUser(id: string): Promise<void> {
    await super.getConnection()(UserDatabase.TABLE_NAME).del().where({ id });
    await BaseDatabase.destroyConnection();
  }
}
