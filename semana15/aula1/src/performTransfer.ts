import getAllAccounts from "./getAllAccounts";
import { JSONFileManager } from "./JSONFileManager";
import * as colors from "colors";
import * as moment from "moment";
import printAllAccounts from "./printAllAccounts";
import { UserAccount } from "./UserAccount";
import { Bank } from "./Bank";
import { Transaction, TransactionsEnum } from "./Transaction";

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

  const allAccounts: UserAccount[] = new Bank().getAllAccounts();
  const senderIdx: number = allAccounts.findIndex(
    (item) => item.getCpf() === senderCpf && item.getName() === senderName
  );
  const receiverIdx: number = allAccounts.findIndex(
    (item) => item.getCpf() === receiverCpf && item.getName() === receiverName
  );
  console.log(receiverName, receiverCpf);
  console.log(senderIdx, receiverIdx);
  // Validacao de cliente
  if (senderIdx === -1 || receiverIdx === -1) {
    console.log(colors.red.bgBlack.bold("Invalid customer information\n"));
    return;
  }

  // Validacao de saldo
  if (allAccounts[senderIdx].getBalance() < amount) {
    console.log(colors.red.bgBlack.bold("Insufficient funds\n"));
    return;
  }

  const transactionSender: Transaction = new Transaction(
    TransactionsEnum.TRANSFER_SENT,
    amount,
    date ? moment(date, "DD/MM/YYYY").unix() : moment().unix(),
    `${description} (para: ${receiverName})`,
    false
  );
  allAccounts[senderIdx].addTransaction(transactionSender);

  const transactionReceiver: Transaction = new Transaction(
    TransactionsEnum.TRANSFER_RECEIVED,
    amount,
    date ? moment(date, "DD/MM/YYYY").unix() : moment().unix(),
    `${description} (de: ${senderName})`,
    false
  );
  allAccounts[receiverIdx].addTransaction(transactionReceiver);

  const fm = new JSONFileManager("./data.json");
  fm.writeToDatabase(allAccounts);

  printAllAccounts();
  console.log(colors.green.bgBlack.bold("Transfer scheduled\n"));
};

export default performTransfer;
