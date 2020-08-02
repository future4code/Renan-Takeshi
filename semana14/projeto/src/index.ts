import createAccount from "./createAccount";
import getBalance from "./getBalance";
import addBalance from "./addBalance";
import payBill from "./payBill";
import updateBalance from "./updateBalance";
import performTransfer from "./performTransfer";
import printAllAccounts from "./printAllAccounts";
import * as inquirer from "inquirer";

main(process.argv);

function main(args: string[]) {
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
      inquire();
      break;
  }
}

function inquire() {
  inquirer
    .prompt({
      type: "list",
      name: "operation",
      message: "Escolha uma operacao",
      choices: [
        "Criar conta",
        "Deposito",
        "Saldo",
        "Pagamento",
        "Transferencia",
        "Atualizar saldos",
        "Imprimir todas as contas",
      ],
    })
    .then((res) => {
      switch (res.operation) {
        case "Criar conta": {
          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "Digite o nome:",
              },
              {
                type: "input",
                name: "cpf",
                message: "Digite o CPF",
                validate: (val) =>
                  val.match(/^[0-9]/gm) ? true : "Digite um numero",
              },
              {
                type: "input",
                name: "birthday",
                message: "Digite a data de nascimento:",
                validate: (val) =>
                  val.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/gm)
                    ? true
                    : "Formato invalido",
              },
            ])
            .then((answers) => {
              main([, , "create", answers.name, answers.cpf, answers.birthday]);
            });
          break;
        }
        case "Deposito": {
          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "Digite o nome:",
              },
              {
                type: "input",
                name: "cpf",
                message: "Digite o CPF",
                validate: (val) =>
                  val.match(/^[0-9]/gm) ? true : "Digite um numero",
              },
              {
                type: "input",
                name: "amount",
                message: "Digite a quantidade:",
                validate: (val) =>
                  val.match(/^[0-9]/gm) ? true : "Digite um numero",
              },
            ])
            .then((answers) => {
              main([, , "deposit", answers.name, answers.cpf, answers.amount]);
            });
          break;
        }
        case "Saldo": {
          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "Digite o nome:",
              },
              {
                type: "input",
                name: "cpf",
                message: "Digite o CPF",
                validate: (val) =>
                  val.match(/^[0-9]/gm) ? true : "Digite um numero",
              },
            ])
            .then((answers) => {
              main([, , "balance", answers.name, answers.cpf]);
            });
          break;
        }
        case "Pagamento": {
          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "Digite o nome:",
              },
              {
                type: "input",
                name: "cpf",
                message: "Digite o CPF:",
                validate: (val) =>
                  val.match(/^[0-9]/gm) ? true : "Digite um numero",
              },
              {
                type: "input",
                name: "amount",
                message: "Digite o valor:",
                validate: (val) =>
                  val.match(/^[0-9]/gm) ? true : "Digite um numero",
              },
              {
                type: "input",
                name: "description",
                message: "Digite uma descricao:",
              },
              {
                type: "input",
                name: "date",
                message: "(Opcional)Digite a data:",
                validate: (val) =>
                  !val.length || val.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/gm)
                    ? true
                    : "Formato invalido",
              },
            ])
            .then((answers) => {
              main([
                ,
                ,
                "pay",
                answers.name,
                answers.cpf,
                answers.amount,
                answers.description,
                answers.date,
              ]);
            });
          break;
        }
        case "Transferencia": {
          inquirer
            .prompt([
              {
                type: "input",
                name: "senderName",
                message: "Digite o nome do remetente:",
              },
              {
                type: "input",
                name: "senderCpf",
                message: "Digite o CPF do remetente:",
                validate: (val) =>
                  val.match(/^[0-9]/gm) ? true : "Digite um numero",
              },
              {
                type: "input",
                name: "recieverName",
                message: "Digite o nome do remetente:",
              },
              {
                type: "input",
                name: "recieverCpf",
                message: "Digite o CPF do remetente:",
                validate: (val) =>
                  val.match(/^[0-9]/gm) ? true : "Digite um numero",
              },
              {
                type: "input",
                name: "amount",
                message: "Digite o valor:",
                validate: (val) =>
                  val.match(/^[0-9]/gm) ? true : "Digite um numero",
              },
              {
                type: "input",
                name: "description",
                message: "Digite uma descricao:",
              },
              {
                type: "input",
                name: "date",
                message: "(Opcional)Digite a data:",
                validate: (val) =>
                  !val.length || val.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/gm)
                    ? true
                    : "Formato invalido",
              },
            ])
            .then((answers) => {
              main([
                ,
                ,
                "transfer",
                answers.senderName,
                answers.senderCpf,
                answers.recieverName,
                answers.recieverCpf,
                answers.amount,
                answers.description,
                answers.date,
              ]);
            });
          break;
        }
        case "Atualizar saldos": {
          main([, , "update"]);
          break;
        }
        case "Imprimir todas as contas": {
          main([, , "print"]);
          break;
        }
        default:
          break;
      }
    });
}
