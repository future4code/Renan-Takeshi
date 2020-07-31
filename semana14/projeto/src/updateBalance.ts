import { CustomerAccount, TransactionsEnum } from "./types";
import getAllAccounts from "./getAllAccounts";
import { writeToDatabase } from "./fileSystem";
import * as colors from "colors";

const updateBalance = (cpf: number): void => {
  const allAccounts: CustomerAccount[] = getAllAccounts();
  const accountIdx: number = allAccounts.findIndex((item) => item.cpf === cpf);

  // Validacao de cliente
  if (accountIdx === -1) {
    console.log(colors.red.bgBlack.bold("Invalid customer information"));
    return;
  }

  allAccounts[accountIdx].balance = allAccounts[accountIdx].transactions.reduce(
    (acc, cur) => {
      if (cur.date < Date.now() && !cur.completed) {
        if (
          cur.type === TransactionsEnum.PAY_BILL ||
          cur.type === TransactionsEnum.TRANSFER_SENT
        ) {
          cur.completed = true;
          return acc - cur.amount;
        }
        if (cur.type === TransactionsEnum.TRANSFER_RECEIVED) {
          cur.completed = true;
          return acc + cur.amount;
        }
      }

      return acc;
    },
    allAccounts[accountIdx].balance
  );

  writeToDatabase(allAccounts);

  console.log(colors.green.bgBlack.bold("Balance update sucesfull"));
};

export default updateBalance;
