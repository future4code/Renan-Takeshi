import { CustomerAccount, TransactionsEnum } from "./types";
import * as db from "./fileSystem";
import * as colors from "colors";

const updateBalance = (cpf: number) => {
  const allAccounts: CustomerAccount[] = db.readDatabase();
  const accountIdx: number = allAccounts.findIndex((item) => item.cpf === cpf);

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

  db.writeToDatabase(allAccounts);

  console.log(colors.green.bgBlack.bold("Balance update sucesfull"));
};

export default updateBalance;
