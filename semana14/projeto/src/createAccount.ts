import { CustomerAccount } from "./types";
import getAllAccounts from "./getAllAccounts";
import { writeToDatabase } from "./fileSystem";
import * as moment from "moment";
import * as colors from "colors";
import printAllAccounts from "./printAllAccounts";

const createAccount = (name: string, cpf: number, birthday: string): void => {
  // Validacao de maioridade
  if (moment().diff(moment(birthday, "DD/MM/YYYY"), "years") < 18) {
    console.log(colors.red.bgBlack.bold("Invalid age"));
    return;
  }

  const accounts: CustomerAccount[] = getAllAccounts();

  // Validacao de CPF
  for (const account of accounts) {
    if (account.cpf === cpf) {
      console.log(colors.red.bgBlack.bold("CPF already in use"));
      return;
    }
  }

  const newAccount: CustomerAccount = {
    name,
    cpf,
    birthday: moment(birthday, "DD/MM/YYYY").unix(),
    balance: 0,
    transactions: [],
  };
  accounts.push(newAccount);

  writeToDatabase(accounts);

  printAllAccounts();
  console.log(colors.green.bgBlack.bold("Account successfully created\n"));
};

export default createAccount;
