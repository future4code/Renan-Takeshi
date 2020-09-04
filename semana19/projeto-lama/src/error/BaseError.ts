export abstract class BaseError extends Error {
  constructor(message: string, public code: number) {
    super(message);
  }
}
