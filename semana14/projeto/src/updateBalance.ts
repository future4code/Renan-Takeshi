import { CustomerAccount, TransactionsEnum } from "./types";
import getAllAccounts from "./getAllAccounts";
import { writeToDatabase } from "./fileSystem";
import * as colors from "colors";
import printAllAccounts from "./printAllAccounts";

const updateBalance = (): void => {
  const allAccounts: CustomerAccount[] = getAllAccounts();

  for (const acount of allAccounts) {
    acount.balance = acount.transactions.reduce((acc, cur) => {
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
    }, acount.balance);
  }

  writeToDatabase(allAccounts);

  printAllAccounts();
  console.log(colors.green.bgBlack.bold("Balance update sucesfull\n"));
};

export default updateBalance;
