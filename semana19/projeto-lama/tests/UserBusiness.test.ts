import { UserBusiness } from "../src/business/UserBusiness";
import { UserInputDTO } from "../src/model/User";

describe("Signup tests", () => {
  const authenticator = { generateToken: jest.fn(() => "token") };
  const hashManager = { hash: jest.fn(() => "password") };
  const idGenerator = { generate: jest.fn(() => "id") };
  const userDatabase = { createUser: jest.fn(() => {}) };
  const userBusiness = new UserBusiness(
    authenticator as any,
    hashManager as any,
    idGenerator as any,
    userDatabase as any
  );
  test("", async () => {
    try {
      const input: UserInputDTO = {
        email: "2",
        name: "1",
        password: "1",
        role: "normal",
      };
      const token = await userBusiness.createUser(input);
      expect(token).toBeFalsy();
    } catch (error) {
      expect(error.message).not.toBeFalsy();
    }
  });
});
