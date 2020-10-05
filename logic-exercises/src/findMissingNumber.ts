export const findMissingNumber = (arr: number[]): number =>
  arr.reduce((acc, cur) => acc - cur, 5050);
