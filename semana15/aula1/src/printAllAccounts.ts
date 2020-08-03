import * as moment from "moment";
import * as colors from "colors";
import getAllAccounts from "./getAllAccounts";

export default () => {
  const accounts = getAllAccounts();

  for (const account of accounts) {
    console.log(
      colors.bgBlack.bold("Nome:".padEnd(15) + account.name.padEnd(50))
    );
    console.log(
      colors.bgBlack.bold(
        "Nascimento:".padEnd(15) +
          moment.unix(account.birthday).format("DD/MM/YYYY").padEnd(50)
      )
    );
    console.log(
      colors.bgBlack.bold("CPF:".padEnd(15) + account.cpf.toString().padEnd(50))
    );
    if (account.balance > 0) {
      console.log(
        colors.bgBlack.bold(
          "Saldo:".padEnd(15) +
            colors.green(account.balance.toFixed(2).padEnd(50))
        )
      );
    } else {
      console.log(
        colors.bgBlack.bold(
          "Saldo:".padEnd(15) +
            colors.red(account.balance.toFixed(2).padEnd(50))
        )
      );
    }
    console.log(colors.bgBlack.bold("Transações:".padEnd(65)));
    for (const transaction of account.transactions) {
      if (transaction.completed) {
        console.log(
          colors.green.bgBlack.bold("Consolidada".padStart(16).padEnd(65))
        );
      } else {
        console.log(
          colors.red.bgBlack.bold("Pendente".padStart(13).padEnd(65))
        );
      }
      console.log(
        colors.bgBlack.bold(
          `Data:`.padStart(10).padEnd(17) +
            moment
              .unix(transaction.date)
              .format("DD/MM/YYYY [às] HH:mm")
              .padEnd(48)
        )
      );
      if (transaction.type === 1 || transaction.type === 2) {
        console.log(
          colors.bgBlack.bold(
            "Valor:".padStart(11).padEnd(17) +
              colors.red(transaction.amount.toFixed(2).padEnd(48))
          )
        );
      } else {
        console.log(
          colors.bgBlack.bold(
            "Valor:".padStart(11).padEnd(17) +
              colors.green(transaction.amount.toFixed(2).padEnd(48))
          )
        );
      }
      console.log(
        colors.bgBlack.bold(
          `Descrição:`.padStart(15).padEnd(17) +
            transaction.description.padEnd(48)
        )
      );
      console.log(colors.bgBlack("".padStart(65)));
    }
    console.log("");
  }
};
