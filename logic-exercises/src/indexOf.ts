export function indexOf(source: string, query: string) {
  for (let sourceIndex = 0; sourceIndex < source.length; sourceIndex++) {
    if (source[sourceIndex] === query[0]) {
      let count = 1;
      for (let queryIndex = 1; queryIndex < query.length; queryIndex++) {
        if (source[sourceIndex + queryIndex] === query[queryIndex]) count++;
        else break;
      }
      if (count === query.length) return sourceIndex;
    }
  }
  return -1;
}
