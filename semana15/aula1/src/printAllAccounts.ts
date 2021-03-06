import * as moment from "moment";
import * as colors from "colors";
import { Bank } from "./Bank";

export default () => {
  const accounts = new Bank().getAllAccounts();

  for (const account of accounts) {
    console.log(
      colors.bgBlack.bold("Nome:".padEnd(15) + account.getName().padEnd(50))
    );
    console.log(
      colors.bgBlack.bold(
        "Nascimento:".padEnd(15) +
          moment.unix(account.getBirthday()).format("DD/MM/YYYY").padEnd(50)
      )
    );
    console.log(
      colors.bgBlack.bold(
        "CPF:".padEnd(15) +
          `${account
            .getCpf()
            .toString()
            .substring(0, 3)}.${account
            .getCpf()
            .toString()
            .substring(3, 6)}.${account
            .getCpf()
            .toString()
            .substring(6, 9)}-${account
            .getCpf()
            .toString()
            .substring(9)}`.padEnd(50)
      )
    );
    if (account.getBalance() > 0) {
      console.log(
        colors.bgBlack.bold(
          "Saldo:".padEnd(15) +
            colors.green(account.getBalance().toFixed(2).padEnd(50))
        )
      );
    } else {
      console.log(
        colors.bgBlack.bold(
          "Saldo:".padEnd(15) +
            colors.red(account.getBalance().toFixed(2).padEnd(50))
        )
      );
    }
    console.log(colors.bgBlack.bold("Transações:".padEnd(65)));
    for (const transaction of account.getTransactions()) {
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
