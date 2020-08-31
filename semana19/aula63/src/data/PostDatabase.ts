import { BaseDatabase } from "./BaseDatabase";

export class PostsDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_post";

  public async createPost(
    postId: string,
    urlPhoto: string,
    description: string,
    type: string,
    userCreatorId: string
  ): Promise<void> {
    await this.getConnection()
      .insert({
        post_id: postId,
        url_photo: urlPhoto,
        description: description,
        type: type,
        user_creator_id: userCreatorId,
      })
      .into(PostsDatabase.TABLE_NAME);
    await BaseDatabase.destroyConnection();
  }

  public async getPostById(postId: string): Promise<any> {
    const response = await this.getConnection()(PostsDatabase.TABLE_NAME)
      .select()
      .where({ post_id: postId });
    return response[0];
  }

  public async deletePostById(postId: string): Promise<void> {
    await this.getConnection()(PostsDatabase.TABLE_NAME)
      .del()
      .where({ post_id: postId });
  }
}
