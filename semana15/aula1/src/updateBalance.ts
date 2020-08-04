import { JSONFileManager } from "./JSONFileManager";
import * as moment from "moment";
import * as colors from "colors";
import printAllAccounts from "./printAllAccounts";
import { UserAccount } from "./UserAccount";
import { Bank } from "./Bank";
import { TransactionsEnum } from "./Transaction";

const updateBalance = (): void => {
  const allAccounts: UserAccount[] = new Bank().getAllAccounts();

  for (const acount of allAccounts) {
    acount.setBalance(
      acount.getTransactions().reduce((acc, cur) => {
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
      }, acount.getBalance())
    );
  }

  const fm = new JSONFileManager("./data.json");
  fm.writeToDatabase(allAccounts);

  printAllAccounts();
  console.log(colors.green.bgBlack.bold("Balance update sucesfull\n"));
};

export default updateBalance;
