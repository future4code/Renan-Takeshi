import { v4 } from "uuid";

export class IdGenerator {
  public static generate(): string {
    return v4();
  }
}
