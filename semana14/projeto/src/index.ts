import createAccount from "./createAccount";
import getBalance from "./getBalance";
import addBalance from "./addBalance";
import payBill from "./payBill";
import updateBalance from "./updateBalance";
import performTransfer from "./performTransfer";
import printAllAccounts from "./printAllAccounts";
import * as readline from "readline";
import * as colors from "colors";

main(process.argv);

function main(args: string[]) {
  console.log(colors.bgRed("".padEnd(65)));
  switch (args[2]) {
    case "create": {
      createAccount(args[3], Number(args[4]), args[5]);
      break;
    }
    case "balance": {
      getBalance(args[3], Number(args[4]));
      break;
    }
    case "deposit": {
      addBalance(args[3], Number(args[4]), Number(args[5]));
      break;
    }
    case "pay": {
      payBill(args[3], Number(args[4]), Number(args[5]), args[6], args[7]);
      break;
    }
    case "update": {
      updateBalance();
      break;
    }
    case "transfer": {
      performTransfer(
        args[3],
        Number(args[4]),
        args[5],
        Number(args[6]),
        Number(args[7]),
        args[8],
        args[9]
      );
      break;
    }
    case "print": {
      printAllAccounts();
      break;
    }
    default:
      cli();
      break;
  }
}

function cli(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const options: string =
    "[create, deposit, balance, pay, transfer, update, print]";
  console.log(colors.bgBlack.bold("Operações disponíveis:".padEnd(65)));
  console.log(colors.bgBlack.bold(options.padEnd(65)));

  const args: string[] = [, ,];

  rl.question("Digite uma operação: ", (operation: string) => {
    args.push(operation);
    switch (operation) {
      case "print": {
        main(args);
        rl.close();
        break;
      }
      case "update": {
        main(args);
        rl.close();
        break;
      }
      case "transfer": {
        rl.question("Digite o nome: ", (senderName: string) => {
          args.push(senderName);
          rl.question("Digite o CPF: ", (senderCpf: string) => {
            args.push(senderCpf);
            rl.question("Digite o nome: ", (receiverName: string) => {
              args.push(receiverName);
              rl.question("Digite o CPF: ", (receiverCpf: string) => {
                args.push(receiverCpf);
                rl.question("Digite o valor: ", (amount: string) => {
                  args.push(amount);
                  rl.question(
                    "Digite uma descrição: ",
                    (description: string) => {
                      args.push(description);
                      main(args);
                      rl.close();
                    }
                  );
                });
              });
            });
          });
        });
        break;
      }
      case "pay": {
        rl.question("Digite o nome: ", (name: string) => {
          args.push(name);
          rl.question("Digite o CPF: ", (cpf: string) => {
            args.push(cpf);
            rl.question("Digite o valor: ", (amount: string) => {
              args.push(amount);
              rl.question("Digite uma descrição: ", (description: string) => {
                args.push(description);
                main(args);
                rl.close();
              });
            });
          });
        });
        break;
      }
      case "balance": {
        rl.question("Digite o nome: ", (name: string) => {
          args.push(name);
          rl.question("Digite o CPF: ", (cpf: string) => {
            args.push(cpf);
            main(args);
            rl.close();
          });
        });
        break;
      }
      case "deposit": {
        rl.question("Digite o nome: ", (name: string) => {
          args.push(name);
          rl.question("Digite o CPF: ", (cpf: string) => {
            args.push(cpf);
            rl.question("Digite o valor: ", (amount: string) => {
              args.push(amount);
              main(args);
              rl.close();
            });
          });
        });
        break;
      }
      case "create": {
        rl.question("Digite o nome: ", (name: string) => {
          args.push(name);
          rl.question("Digite o CPF: ", (cpf: string) => {
            args.push(cpf);
            rl.question(
              "Digite a data de nascimento (DD/MM/AAAA): ",
              (birthday: string) => {
                args.push(birthday);
                main(args);
                rl.close();
              }
            );
          });
        });
        break;
      }
      default:
        console.log("Operacao invalida");
        rl.close();
        return;
    }
  });
}
