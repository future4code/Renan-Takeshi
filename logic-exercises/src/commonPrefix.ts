export function commonPrefix(input: string[]) {
  let commonPrefix = "";

  for (let i = 0; i < input[0].length; i++) {
    let char = input[0][i];
    let isCommon = true;
    for (let j = 1; j < input.length; j++) {
      if (input[j][i] !== char) {
        isCommon = false;
        break;
      }
    }
    if (isCommon) commonPrefix += char;
    else break;
  }

  return commonPrefix;
}
