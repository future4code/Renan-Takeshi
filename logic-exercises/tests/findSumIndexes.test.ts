import { findSumIndexes } from "../src/findSumIndexes";

describe("Testing findSumIndexes", () => {
  const nums = [4, 5, 10, 12, 21];

  test("Should return [1, 3] for target 17 and array [4, 5, 10, 12, 21]", () => {
    expect(findSumIndexes(nums, 17)).toEqual([1, 3]);
  });
  test("Should return an empty array for target 18 and array [4, 5, 10, 12, 21]", () => {
    expect(findSumIndexes(nums, 18)).toEqual([]);
  });
});
