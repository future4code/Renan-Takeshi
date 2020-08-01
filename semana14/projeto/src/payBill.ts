import { CustomerAccount, TransactionsEnum, Transaction } from "./types";
import getAllAccounts from "./getAllAccounts";
import { writeToDatabase } from "./fileSystem";
import * as colors from "colors";
import * as moment from "moment";
import printAllAccounts from "./printAllAccounts";

const payBill = (
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

  const allAccounts: CustomerAccount[] = getAllAccounts();
  const accountIdx: number = allAccounts.findIndex((item) => item.cpf === cpf);

  // Validacao de cliente
  if (accountIdx === -1) {
    console.log(colors.red.bgBlack.bold("Invalid customer information"));
    return;
  }

  // Validacao de saldo
  if (allAccounts[accountIdx].balance < amount) {
    console.log(colors.red.bgBlack.bold("Insufficient funds"));
    return;
  }

  const transaction: Transaction = {
    type: TransactionsEnum.PAY_BILL,
    amount,
    date: date ? Date.parse(date.split("/").reverse().join("-")) : Date.now(),
    description,
    completed: false,
  };

  allAccounts[accountIdx].transactions.push(transaction);

  writeToDatabase(allAccounts);

  printAllAccounts();
  console.log(colors.green.bgBlack.bold("Payment scheduled\n"));
};

export default payBill;
