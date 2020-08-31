import { User, performPurchasae } from "../src/ex1";

describe("Exercicio 1", () => {
  test("Testando saldo maior que o valor", () => {
    const user: User = { name: "Jon", balance: 100 };
    expect(performPurchasae(user, 50)).toEqual({ ...user, balance: 50 });
  });
  test("Testando saldo igual ao valor", () => {
    const user: User = { name: "Jon", balance: 50 };
    expect(performPurchasae(user, 50)).toEqual({ ...user, balance: 0 });
  });
  test("Testando saldo menor que o valor", () => {
    const user: User = { name: "Jon", balance: 10 };
    expect(performPurchasae(user, 50)).toEqual(undefined);
  });
});
