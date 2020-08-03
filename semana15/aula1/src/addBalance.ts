import { CustomerAccount, TransactionsEnum, Transaction } from "./types";
import getAllAccounts from "./getAllAccounts";
import { JSONFileManager } from "./JSONFileManager";
import * as moment from "moment";
import * as colors from "colors";
import printAllAccounts from "./printAllAccounts";

const addBalance = (name: string, cpf: number, amount: number): void => {
  const allAccounts: CustomerAccount[] = getAllAccounts();
  const accountIdx: number = allAccounts.findIndex(
    (item) => item.name === name && item.cpf === cpf
  );

  // Validacao de cliente
  if (accountIdx === -1) {
    console.log(colors.red.bgBlack.bold("Invalid customer information"));
    return;
  }

  const transaction: Transaction = {
    type: TransactionsEnum.ADD_BALANCE,
    amount,
    date: moment().unix(),
    description: "Depósito de dinheiro",
    completed: true,
  };
  allAccounts[accountIdx].transactions.push(transaction);
  allAccounts[accountIdx].balance += amount;

  const fm = new JSONFileManager("./data.json");
  fm.writeToDatabase(allAccounts);

  printAllAccounts();
  console.log(colors.green.bgBlack.bold("Deposit sucesfull\n"));
};

export default addBalance;
