import { checaParenteses } from "../src/checkBrackets";

describe("Testing brackets validity", () => {
  test("Valid", () => {
    const str = "[[]{()}()]";

    expect(checaParenteses(str)).toBe(true);
  });

  test("Extra closing bracket", () => {
    const str = "[[]{()}()]]";

    expect(checaParenteses(str)).toBe(false);
  });

  test("Extra opening bracket", () => {
    const str = "[[]{()}()](";

    expect(checaParenteses(str)).toBe(false);
  });

  test("Invalid bracket pair", () => {
    const str = "[[]{(]}()]";

    expect(checaParenteses(str)).toBe(false);
  });
});
