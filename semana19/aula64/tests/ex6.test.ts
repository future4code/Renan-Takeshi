import { performAttackInv, performAttack } from "../src/ex3";
import { Character } from "../src/ex1";

describe("Exercicio 6", () => {
  test("Quando ataque e defesa sao iguais", () => {
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
      defense: 200,
      strength: 0,
    };

    performAttackInv(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1500);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });
  test("Quando defesa for maior q o ataque", () => {
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
      defense: 201,
      strength: 0,
    };

    performAttackInv(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1500);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test("Quando o attacker ja estiver morto", () => {
    const validatorMock = jest.fn(() => false);

    const attacker: Character = {
      name: "Banana",
      life: 0,
      defense: 0,
      strength: 200,
    };

    const defender: Character = {
      name: "Pijama",
      life: 1500,
      defense: 199,
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
  test("Quando o defender ja estiver morto", () => {
    const attacker: Character = {
      name: "Banana",
      life: 1,
      defense: 0,
      strength: 200,
    };

    const defender: Character = {
      name: "Pijama",
      life: 0,
      defense: 199,
      strength: 0,
    };
    try {
      performAttack(attacker, defender);
    } catch (error) {
      expect(error.message).toBe("Invalid character");
    }
  });
});
