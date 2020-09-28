/* Exercicio 1 */
function isOneEdit(strA: string, strB: string): boolean {
  if (Math.abs(strB.length - strA.length) > 1) return false;

  // strA is now the largest
  if (strB.length > strA.length) {
    let temp = strA;
    strA = strB;
    strB = temp;
  }
  // if one is bigger, must include the other
  if (strA.length > strB.length) return strA.includes(strB);

  // inputs have the same size, there can be only 1 mismatch
  const charsDiff = strA.split("").filter((char, idx) => char !== strB[idx]);
  return !(charsDiff.length > 1);
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

/* Exercicio 3 */
function replaceMatrixValue(
  matrix: number[][],
  col: number,
  row: number,
  value: number
) {
  if (!matrix[row] || !matrix[row][col]) throw "Out of bounds";
  matrix[row][col] = value;
}

/* Exercicio 4 */
function transpose(matrix: number[][]) {
  let transpose: number[][] = Array.from(
    { length: matrix[0].length },
    () => []
  );
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      transpose[i][j] = matrix[j][i];
    }
  }
  return transpose;
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
