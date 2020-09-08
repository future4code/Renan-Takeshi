import { validateCharacter } from "../src/ex1";
describe("Exercicio 2", () => {
  test("item a", () => {
    expect(
      validateCharacter({ name: "", life: 1500, strength: 1, defense: 1 })
    ).toBe(false);
  });
  test("item b", () => {
    expect(
      validateCharacter({
        name: "Jon",
        life: undefined,
        strength: 1,
        defense: 1,
      })
    ).toBe(false);
  });
  test("item c", () => {
    expect(
      validateCharacter({
        name: "Jon",
        life: 1500,
        strength: undefined,
        defense: 1,
      })
    ).toBe(false);
  });
  test("item d", () => {
    expect(
      validateCharacter({
        name: "Jon",
        life: 1500,
        strength: 1,
        defense: undefined,
      })
    ).toBe(false);
  });
  test("item e", () => {
    expect(
      validateCharacter({ name: "Jon", life: 1500, strength: 1, defense: -1 })
    ).toBe(false);
  });
  test("item f", () => {
    expect(
      validateCharacter({ name: "Jon", life: 1500, strength: 1, defense: 0 })
    ).toBe(true);
  });
  test("item e", () => {
    expect(
      validateCharacter({ name: "Jon", life: 1500, strength: 1, defense: 1 })
    ).toBe(true);
  });
});
