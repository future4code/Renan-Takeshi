import { countNegatives } from "../src/countNegatives";

describe("Testing countNegatives", () => {
  test("Should return 8 for a matrix with 8 negative numbers!", () => {
    const matrix = [
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3],
    ];
    expect(countNegatives(matrix)).toBe(8);
  });
  test("Should return 0 because it works", () => {
    const matrix = [
      [3, 2],
      [1, 0],
    ];
    expect(countNegatives(matrix)).toBe(0);
  });
  test("Should return 0 for no matrix", () => {
    expect(countNegatives([])).toBe(0);
  });
});
