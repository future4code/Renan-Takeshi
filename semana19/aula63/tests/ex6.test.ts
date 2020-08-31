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
    await db.createPost("1", "photo", "description", "normal", "1");

    const post = await db.getPostById("1");

    expect(post).not.toBe(undefined);
  });
});
