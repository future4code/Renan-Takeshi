if (process.argv.length > 4) {
  const args: string[] = process.argv.slice(2);
  const firstNumber: number = Number(args[1]);
  const secondNumber: number = Number(args[2]);
  switch (args[0]) {
    case "add": {
      console.log(
        `\x1b[32m%s\x1b[0m`,
        `Resposta: ${firstNumber + secondNumber}`
      );
      break;
    }
    case "sub": {
      console.log(
        `\x1b[32m%s\x1b[0m`,
        `Resposta: ${firstNumber - secondNumber}`
      );
      break;
    }
    case "mult": {
      console.log(
        `\x1b[32m%s\x1b[0m`,
        `Resposta: ${firstNumber * secondNumber}`
      );
      break;
    }
    case "div": {
      console.log(
        `\x1b[32m%s\x1b[0m`,
        `Resposta: ${firstNumber / secondNumber}`
      );
      break;
    }
    default:
      break;
  }
} else {
  console.log("\x1b[31m%s\x1b[0m", "Parametros incorretos!");
}
