import { CustomerAccount } from "./types";
import * as moment from "moment";
import * as colors from "colors";
import printAllAccounts from "./printAllAccounts";
import { Bank } from "./Bank";
import { UserAccount } from "./UserAccount";

const createAccount = (name: string, cpf: number, birthday: string): void => {
  // Validacao de maioridade
  if (moment().diff(moment(birthday, "DD/MM/YYYY"), "years") < 18) {
    console.log(colors.red.bgBlack.bold("Invalid age"));
    return;
  }

  const bank = new Bank();
  const allAccounts: UserAccount[] = bank.getAllAccounts();

  // Validacao de CPF
  for (const account of allAccounts) {
    if (account.getCpf() === cpf) {
      console.log(colors.red.bgBlack.bold("CPF already in use"));
      return;
    }
  }

  const newAccount: UserAccount = new UserAccount(
    name,
    cpf,
    moment(birthday, "DD/MM/YYYY").unix(),
    0,
    []
  );

  bank.createAccount(newAccount);

  printAllAccounts();
  console.log(colors.green.bgBlack.bold("Account successfully created\n"));
};

export default createAccount;
