import { CustomerAccount, TransactionsEnum, Transaction } from "./types";
import * as db from "./fileSystem";
import * as colors from "colors";
import * as moment from "moment";

const payBill = (
  description: string,
  amount: number,
  cpf: number,
  date?: string // DD/MM/YYYY
) => {
  if (date && moment(date, "DD/MM/YYYY").diff(moment(), "days") < 0) {
    console.log(colors.red.bgBlack.bold("Invalid date"));
    return;
  }

  const allAccounts: CustomerAccount[] = db.readDatabase();
  const accountIdx: number = allAccounts.findIndex((item) => item.cpf === cpf);
  if (accountIdx === -1) {
    console.log(colors.red.bgBlack.bold("Invalid customer information"));
    return;
  }

  const transaction: Transaction = {
    type: TransactionsEnum.PAY_BILL,
    amount,
    date: date ? Date.parse(date.split("/").reverse().join("-")) : Date.now(),
    description,
  };

  allAccounts[accountIdx].transactions.push(transaction);

  db.writeToDatabase(allAccounts);

  console.log(colors.green.bgBlack.bold("Transaction sucesfull"));
};

export default payBill;
