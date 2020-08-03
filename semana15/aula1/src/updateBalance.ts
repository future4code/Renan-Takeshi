import { CustomerAccount, TransactionsEnum } from "./types";
import getAllAccounts from "./getAllAccounts";
import { JSONFileManager } from "./JSONFileManager";
import * as moment from "moment";
import * as colors from "colors";
import printAllAccounts from "./printAllAccounts";

const updateBalance = (): void => {
  const allAccounts: CustomerAccount[] = getAllAccounts();

  for (const acount of allAccounts) {
    acount.balance = acount.transactions.reduce((acc, cur) => {
      if (cur.date < moment().unix() && !cur.completed) {
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

  const fm = new JSONFileManager("./data.json");
  fm.writeToDatabase(allAccounts);

  printAllAccounts();
  console.log(colors.green.bgBlack.bold("Balance update sucesfull\n"));
};

export default updateBalance;
