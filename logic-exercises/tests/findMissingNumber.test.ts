import { findMissingNumber } from "../src/findMissingNumber";

test("Proper", () => {
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
  const missingNumber = numbers.splice(49, 1)[0];

  const foundNumber = findMissingNumber(numbers);
  expect(foundNumber).toBe(missingNumber);
});

test("Error", () => {
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
  const missingNumber = numbers.splice(49, 1)[0];

  const foundNumber = findMissingNumber(numbers);
  expect(foundNumber).toBe(missingNumber);
});
