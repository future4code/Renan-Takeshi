import * as colors from "colors";
import { UserAccount } from "./UserAccount";
import { Bank } from "./Bank";

const getBalance = (name: string, cpf: number): number | void => {
  const accounts: UserAccount[] = new Bank().getAllAccounts();
  for (const account of accounts) {
    if (account.getCpf() === cpf && account.getName() === name) {
      console.log(
        colors.green.bgBlack.bold(
          `Account balance: R$${account.getBalance().toFixed(2)}`
        )
      );
      return account.getBalance();
    }
  }
  console.log(colors.red.bgBlack.bold("Invalid customer information"));
};

export default getBalance;
