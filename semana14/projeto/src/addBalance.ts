import { CustomerAccount, TransactionsEnum, Transaction } from "./types";
import * as db from "./fileSystem";
import * as colors from "colors";

const addBalance = (name: string, cpf: number, amount: number) => {
  const allAccounts: CustomerAccount[] = db.readDatabase();
  const accountIdx: number = allAccounts.findIndex(
    (item) => item.name === name && item.cpf === cpf
  );
  if (accountIdx === -1) {
    console.log(colors.red.bgBlack.bold("Invalid customer information"));
    return;
  }
  const transaction: Transaction = {
    type: TransactionsEnum.INCREASE_BALANCE,
    amount,
    date: Date.now(),
    description: "Depósito de dinheiro",
  };
  allAccounts[accountIdx].transactions.push(transaction);
  allAccounts[accountIdx].balance += amount;

  db.writeToDatabase(allAccounts);

  console.log(colors.green.bgBlack.bold("Transaction sucesfull"));
};

export default addBalance;
