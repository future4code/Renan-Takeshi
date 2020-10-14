export function findSumIndexes(numbers: number[], sum: number): number[] {
  let subtractionHash = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (subtractionHash.has(numbers[i])) {
      return [subtractionHash.get(numbers[i]), i];
    } else {
      subtractionHash.set(sum - numbers[i], i);
    }
  }
  return [];
}
