export const countNegatives = (matrix: number[][]) =>
  matrix.reduce((acc, cur) => {
    const firstNegativeIndex = cur.findIndex((item) => item < 0);
    return (
      acc + (firstNegativeIndex !== -1 ? cur.length - firstNegativeIndex : 0)
    );
  }, 0);
