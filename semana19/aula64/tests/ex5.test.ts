import { performAttackInv } from "../src/ex3";
import { Character } from "../src/ex1";

describe("Exercicio 5", () => {
  test("item a", () => {
    const validatorMock = jest.fn(() => true);

    const attacker: Character = {
      name: "Banana",
      life: 1500,
      defense: 0,
      strength: 200,
    };

    const defender: Character = {
      name: "Pijama",
      life: 1500,
      defense: 0,
      strength: 0,
    };

    performAttackInv(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });
  test("item b", () => {
    const validatorMock = jest.fn(() => false);

    const attacker: Character = {
      name: "Banana",
      life: 1500,
      defense: 0,
      strength: 200,
    };

    const defender: Character = {
      name: "Pijama",
      life: 1500,
      defense: 0,
      strength: 0,
    };
    try {
      performAttackInv(attacker, defender, validatorMock as any);
    } catch (error) {
      expect(error.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
});
