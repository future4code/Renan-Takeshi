import * as colors from "colors";
import * as moment from "moment";
import printAllAccounts from "./printAllAccounts";

import { UserAccount } from "./UserAccount";
import { Bank } from "./Bank";
import { Transaction, TransactionsEnum } from "./Transaction";
import { JSONFileManager } from "./JSONFileManager";

const payBill = (
  name: string,
  cpf: number,
  amount: number,
  description: string,
  date?: string // DD/MM/YYYY
): void => {
  // Validacao de data
  if (date && moment(date, "DD/MM/YYYY").diff(moment(), "days") < 0) {
    console.log(colors.red.bgBlack.bold("Invalid date"));
    return;
  }

  const allAccounts: UserAccount[] = new Bank().getAllAccounts();
  const accountIdx = allAccounts.findIndex(
    (item) => item.getName() === name && item.getCpf() === cpf
  );

  // Validacao de cliente
  if (accountIdx === -1) {
    console.log(colors.red.bgBlack.bold("Invalid customer information"));
    return;
  }

  // Validacao de saldo
  if (allAccounts[accountIdx].getBalance() < amount) {
    console.log(colors.red.bgBlack.bold("Insufficient funds"));
    return;
  }

  const transaction = new Transaction(
    TransactionsEnum.PAY_BILL,
    amount,
    date ? moment(date, "DD/MM/YYYY").unix() : moment().unix(),
    description,
    false
  );

  allAccounts[accountIdx].addTransaction(transaction);

  const fm = new JSONFileManager("./data.json");
  fm.writeToDatabase(allAccounts);

  printAllAccounts();
  console.log(colors.green.bgBlack.bold("Payment scheduled\n"));
};

export default payBill;
