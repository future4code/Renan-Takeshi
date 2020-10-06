import { indexOf } from "../src/indexOf";

describe("Testing iterative indexOf implementation", () => {
  test("Query should be found", () => {
    const source = "0101201234";
    const query = "123";

    const expectedIndex = source.indexOf(query);
    const foundIndex = indexOf(source, query);

    expect(foundIndex).toBe(expectedIndex);
  });

  test("Query should NOT be found", () => {
    const source = "012345";
    const query = "6";

    const foundIndex = indexOf(source, query);

    expect(foundIndex).toBe(-1);
  });
});
