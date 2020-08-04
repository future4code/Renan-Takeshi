import * as moment from "moment";
import * as colors from "colors";
import printAllAccounts from "./printAllAccounts";
import { UserAccount } from "./UserAccount";
import { Bank } from "./Bank";
import { Transaction, TransactionsEnum } from "./Transaction";
import { JSONFileManager } from "./JSONFileManager";

const addBalance = (name: string, cpf: number, amount: number): void => {
  const allAccounts: UserAccount[] = new Bank().getAllAccounts();
  const accountIdx: number = allAccounts.findIndex(
    (item) => item.getName() === name && item.getCpf() === cpf
  );

  // Validacao de cliente
  if (accountIdx === -1) {
    console.log(colors.red.bgBlack.bold("Invalid customer information"));
    return;
  }

  const transaction: Transaction = new Transaction(
    TransactionsEnum.ADD_BALANCE,
    amount,
    moment().unix(),
    "Depósito de dinheiro",
    true
  );

  allAccounts[accountIdx].addTransaction(transaction);
  allAccounts[accountIdx].addBalance(amount);

  const fm = new JSONFileManager("./data.json");
  fm.writeToDatabase(allAccounts);

  printAllAccounts();
  console.log(colors.green.bgBlack.bold("Deposit sucesfull\n"));
};

export default addBalance;
