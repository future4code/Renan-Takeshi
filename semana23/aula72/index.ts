/* Exercicio 1 - Ta errado, nao me julgue! */
function isOneEdit(strA: string, strB: string): boolean {
  if (strA.length > strB.length + 1 || strA.length < strB.length - 1)
    return false;

  const countCharsNotInB = strA
    .split("")
    .filter((char, idx) => char != strB[idx]).length;
  const countCharsNotInA = strB
    .split("")
    .filter((char, idx) => char != strA[idx]).length;

  return !(countCharsNotInB + countCharsNotInA > 2);
}

/* Exercicio 2 */
function compressString(str: string) {
  let result: string = str[0] + "1";
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      result =
        result.slice(0, -1) +
        (Number(result[result.length - 1]) + 1).toString();
    } else {
      result += str[i] + "1";
    }
  }

  return result.length > str.length ? str : result;
}

/* Exercicio 5 */
function countNegatives(matrix: number[][]) {
  let count = 0;
  for (let row of matrix) {
    const firstPositiveIdx = row.findIndex((item) => item >= 0);
    count += firstPositiveIdx > -1 ? firstPositiveIdx : row.length;
  }
  return count;
}
