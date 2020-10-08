import { commonPrefix } from "../src/commonPrefix";

describe("Testing commonPrefix", () => {
  test("Should return 'cor'", () => {
    const input = ["cor", "coracao", "corona", "coreia"];
    expect(commonPrefix(input)).toBe("cor");
  });
  test("Should return empty string", () => {
    const input = ["dog", "racecar", "car"];
    expect(commonPrefix(input)).toBe("");
  });
});
