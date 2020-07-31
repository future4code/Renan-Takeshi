import { CustomerAccount, TransactionsEnum, Transaction } from "./types";
import * as db from "./fileSystem";
import * as colors from "colors";
import * as moment from "moment";

const performTransfer = (
  senderName: string,
  senderCpf: number,
  receiverName: string,
  receiverCpf: number,
  description: string,
  amount: number,
  date?: string // DD/MM/YYYY
) => {
  // Validacao de data
  if (date && moment(date, "DD/MM/YYYY").diff(moment(), "days") < 0) {
    console.log(colors.red.bgBlack.bold("Invalid date"));
    return;
  }

  const allAccounts: CustomerAccount[] = db.readDatabase();
  const senderIdx: number = allAccounts.findIndex(
    (item) => item.cpf === senderCpf && item.name === senderName
  );
  const receiverIdx: number = allAccounts.findIndex(
    (item) => item.cpf === receiverCpf && item.name === receiverName
  );

  // Validacao de cliente
  if (senderIdx === -1 || receiverIdx === -1) {
    console.log(colors.red.bgBlack.bold("Invalid customer information"));
    return;
  }

  // Validacao de saldo
  if (allAccounts[senderIdx].balance < amount) {
    console.log(colors.red.bgBlack.bold("Insufficient funds"));
    return;
  }

  const transactionSender: Transaction = {
    type: TransactionsEnum.TRANSFER_SENT,
    amount,
    date: date ? Date.parse(date.split("/").reverse().join("-")) : Date.now(),
    description: `${description} (to ${receiverName})`,
    completed: false,
  };
  allAccounts[senderIdx].transactions.push(transactionSender);

  const transactionReceiver: Transaction = {
    type: TransactionsEnum.TRANSFER_RECEIVED,
    amount,
    date: date ? Date.parse(date.split("/").reverse().join("-")) : Date.now(),
    description: `${description} (from ${senderName})`,
    completed: false,
  };
  allAccounts[receiverIdx].transactions.push(transactionReceiver);

  db.writeToDatabase(allAccounts);

  console.log(colors.green.bgBlack.bold("Transfer sucesfull"));
};

export default performTransfer;
