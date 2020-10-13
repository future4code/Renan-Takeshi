import { findLonelyInteger } from "../src/findLonelyInteger";

describe("Testing findLonelyInteger", () => {
  test("Should return 3 for input: [1, 2, 3, 2, 1]", () => {
    expect(findLonelyInteger([1, 2, 3, 2, 1])).toBe(3);
  });
  test("Should throw an error for an empty array", () => {
    try {
      findLonelyInteger([]);
    } catch (error) {
      expect(error).not.toBeNull();
    }
  });
});
