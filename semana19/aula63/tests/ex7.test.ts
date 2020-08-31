import { PostsDatabase } from "../src/data/PostDatabase";
import { BaseDatabase } from "../src/data/BaseDatabase";
import dotenv from "dotenv";
dotenv.config();
describe("Exercicio 6", () => {
  const db = new PostsDatabase();

  afterAll(async () => {
    await db.deletePostById("1");
    await BaseDatabase.destroyConnection();
  });

  test("item a", async () => {
    try {
      await db.createPost("1", "photo", "description", "normal", "1");
      await db.createPost("1", "photo", "description", "normal", "1");
    } catch (error) {
      expect(error).not.toBe(undefined);
    }
  });
});
