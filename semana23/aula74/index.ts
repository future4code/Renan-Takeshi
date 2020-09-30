/* Exercicio 1 */

function printIntegersAsc(n: number): void {
  if (n > 0) printIntegersAsc(n - 1);
  console.log(n);
}

function printIntegersDesc(n: number): void {
  if (n > 0) printIntegersDesc(n - 1);
  console.log(n);
}

/* Exercicio 2 */

const summation = (n: number): number => (n > 0 ? n + summation(n - 1) : 0);

/* Exercicio 3 */

function printArray(arr: number[]): void {
  if (arr.length) {
    console.log(arr[0]);
    printArray(arr.slice(1));
  }
}

/* Exercicio 4 */

const countDigits = (n: number): number =>
  1 + (n / 10 > 1 ? countDigits(n / 10) : 0);

/* Exercicio 5 */

const findGreatest = (arr: number[], carry: number = 0): number => {
  if (arr.length) {
    carry = Math.max(carry, arr[0]);
    return findGreatest(arr.slice(1), carry);
  } else {
    return carry;
  }
};

/* Exercicio 6 */

const findUpperCase = (str: string): string =>
  str[0] === str[0].toUpperCase() ? str[0] : findUpperCase(str.slice(1));

/* Exercicio 7 */

// O(b)

/* Exercicio 8 */

// O(2^n)
