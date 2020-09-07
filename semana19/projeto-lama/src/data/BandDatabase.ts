import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {
  private static TABLE_NAME = "lama_band";

  public async createBand(
    id: string,
    name: string,
    musicGenre: string,
    responsible: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          responsible,
          music_genre: musicGenre,
        })
        .into(BandDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<Band | undefined> {
    const result = await this.getConnection()
      .select()
      .from(BandDatabase.TABLE_NAME)
      .where({ email });

    return Band.toBandModel(result[0]);
  }
}
