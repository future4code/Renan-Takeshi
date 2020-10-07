import { checkBrackets } from "../src/checkBrackets";

describe("Testing brackets validity", () => {
  test("Valid", () => {
    const str = "[[]{()}()]";

    expect(checkBrackets(str)).toBe(true);
  });

  test("Extra closing bracket", () => {
    const str = "[[]{()}()]]";

    expect(checkBrackets(str)).toBe(false);
  });

  test("Extra opening bracket", () => {
    const str = "[[]{()}()](";

    expect(checkBrackets(str)).toBe(false);
  });

  test("Invalid bracket pair", () => {
    const str = "[[]{(]}()]";

    expect(checkBrackets(str)).toBe(false);
  });
});
