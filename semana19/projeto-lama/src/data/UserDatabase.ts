import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "lama_user";

  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
    role: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          email,
          name,
          password,
          role,
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await this.getConnection()
      .select()
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    if (!result[0]) return;

    return User.toUserModel(result[0]);
  }
}
