const somaSubtracaoMultiplicacaoMaior = (x: number, y: number): void => {
  console.log(`${x} + ${y} = ${x + y}`);
  console.log(`${x} - ${y} = ${x - y}`);
  console.log(`${x} * ${y} = ${x * y}`);
  console.log(
    `${
      x === y
        ? "Os numeros sao iguais"
        : x > y
        ? `O maior eh ${x}`
        : `O maior eh ${y}`
    }`
  );
};

somaSubtracaoMultiplicacaoMaior(2, 3);
