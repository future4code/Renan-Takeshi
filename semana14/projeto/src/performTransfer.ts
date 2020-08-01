import { CustomerAccount, TransactionsEnum, Transaction } from "./types";
import getAllAccounts from "./getAllAccounts";
import { writeToDatabase } from "./fileSystem";
import * as colors from "colors";
import * as moment from "moment";
import printAllAccounts from "./printAllAccounts";

const performTransfer = (
  senderName: string,
  senderCpf: number,
  receiverName: string,
  receiverCpf: number,
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
    date: date ? moment(date, "DD/MM/YYYY").unix() : moment().unix(),
    description: `${description} (para: ${receiverName})`,
    completed: false,
  };
  allAccounts[senderIdx].transactions.push(transactionSender);

  const transactionReceiver: Transaction = {
    type: TransactionsEnum.TRANSFER_RECEIVED,
    amount,
    date: date ? moment(date, "DD/MM/YYYY").unix() : moment().unix(),
    description: `${description} (de: ${senderName})`,
    completed: false,
  };
  allAccounts[receiverIdx].transactions.push(transactionReceiver);

  writeToDatabase(allAccounts);

  printAllAccounts();
  console.log(colors.green.bgBlack.bold("Transfer scheduled\n"));
};

export default performTransfer;
