import * as bcrypt from "bcryptjs";

export abstract class HashManager {
  static async hash(s: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    return result;
  }

  static async compare(s: string, hash: string): Promise<boolean> {
    const result = await bcrypt.compare(s, hash);
    return result;
  }
}
