import {
  NATIONALITY,
  LOCATION,
  User,
  Casino,
  Result,
  verifyAge,
} from "../src/ex3";

describe("Exercicio 5", () => {
  const casinoBRA: Casino = {
    name: "Casino Roraima",
    location: LOCATION.BRAZIL,
  };
  const casinoEUA: Casino = {
    name: "Casino Florida",
    location: LOCATION.EUA,
  };
  const brasileiro19: User = {
    age: 19,
    name: "Jao",
    nationality: NATIONALITY.BRAZILIAN,
  };
  const americano19: User = {
    age: 19,
    name: "Jon",
    nationality: NATIONALITY.AMERICAN,
  };
  const brasileiro19b: User = {
    age: 19,
    name: "Maria",
    nationality: NATIONALITY.BRAZILIAN,
  };
  const americano19b: User = {
    age: 19,
    name: "Mary",
    nationality: NATIONALITY.AMERICAN,
  };
  const americano19c: User = {
    age: 21,
    name: "Creed",
    nationality: NATIONALITY.AMERICAN,
  };
  const americano19d: User = {
    age: 21,
    name: "Phillis",
    nationality: NATIONALITY.AMERICAN,
  };
  test("item a", () => {
    const result: Result = verifyAge(casinoBRA, [brasileiro19]);
    expect(result.americans.allowed.length).toEqual(0);
    expect(result.americans.unallowed.length).toEqual(0);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
    expect(result.brazilians.unallowed.length).toEqual(0);
  });
  test("item b", () => {
    const result: Result = verifyAge(casinoBRA, [americano19]);
    expect(result.americans.allowed.length).toEqual(1);
    expect(result.americans.unallowed.length).toEqual(0);
    expect(result.brazilians.allowed.length).toEqual(0);
    expect(result.brazilians.unallowed.length).toEqual(0);
  });
  test("item c", () => {
    const result: Result = verifyAge(casinoEUA, [
      brasileiro19,
      brasileiro19b,
      americano19,
      americano19b,
    ]);

    expect(result.americans.allowed.length).toEqual(0);
    expect(result.americans.unallowed.length).toEqual(2);
    expect(result.americans.unallowed).toContain(americano19.name);
    expect(result.americans.unallowed).toContain(americano19b.name);
    expect(result.brazilians.allowed.length).toEqual(0);
    expect(result.brazilians.unallowed.length).toEqual(2);
    expect(result.brazilians.unallowed).toContain(brasileiro19.name);
    expect(result.brazilians.unallowed).toContain(brasileiro19b.name);
  });
  test("item d", () => {
    const result: Result = verifyAge(casinoEUA, [
      brasileiro19,
      brasileiro19b,
      americano19c,
      americano19d,
    ]);

    expect(result.americans.allowed.length).toEqual(2);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.brazilians.allowed.length).toEqual(0);
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
  });
});
