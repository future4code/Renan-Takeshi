export function findSumIndexes(array: number[], sum: number): number[] {
  let substractionHash = new Map();

  for (let i = 0; i < array.length; i++) {
    if (substractionHash.has(array[i])) {
      return [substractionHash.get(array[i]), i];
    } else {
      substractionHash.set(sum - array[i], i);
    }
  }
  return [];
}
