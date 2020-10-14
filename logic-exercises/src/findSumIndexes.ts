export function findSumIndexes(numbers: number[], sum: number): number[] {
  let substractionHash = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (substractionHash.has(numbers[i])) {
      return [substractionHash.get(numbers[i]), i];
    } else {
      substractionHash.set(sum - numbers[i], i);
    }
  }
  return [];
}
