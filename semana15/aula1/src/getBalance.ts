import { CustomerAccount } from "./types";
import getAllAccounts from "./getAllAccounts";
import * as colors from "colors";

const getBalance = (name: string, cpf: number): number | void => {
  const accounts: CustomerAccount[] = getAllAccounts();
  for (const account of accounts) {
    if (account.cpf === cpf && account.name === name) {
      console.log(
        colors.green.bgBlack.bold(
          `Account balance: R$${account.balance.toFixed(2)}`
        )
      );
      return account.balance;
    }
  }
  console.log(colors.red.bgBlack.bold("Invalid customer information"));
};

export default getBalance;
