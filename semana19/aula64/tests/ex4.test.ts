describe("Exercicio 5", () => {
  test("item a", () => {
    const validatorMock = jest.fn(() => true);
    expect(validatorMock()).toBe(true);
  });

  test("item b", () => {
    const validatorMock = jest.fn(() => false);
    expect(validatorMock()).toBe(false);
  });
});
