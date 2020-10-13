export const findLonelyInteger = (numbers: number[]) =>
  numbers.reduce((acc, cur) => acc ^ cur);
