import { v4 } from "uuid";

export abstract class IdGenerator {
  static generate(): string {
    return v4();
  }
}
