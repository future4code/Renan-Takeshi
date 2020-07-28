const args: string[] = process.argv.slice(2);
const firstNumber: number = Number(args[1]);
const secondNumber: number = Number(args[2]);
switch (args[0]) {
  case "add": {
    console.log(`Resposta: ${firstNumber + secondNumber}`);
    break;
  }
  case "sub": {
    console.log(`Resposta: ${firstNumber - secondNumber}`);
    break;
  }
  case "mult": {
    console.log(`Resposta: ${firstNumber * secondNumber}`);
    break;
  }
  case "div": {
    console.log(`Resposta: ${firstNumber / secondNumber}`);
    break;
  }
  default:
    break;
}
