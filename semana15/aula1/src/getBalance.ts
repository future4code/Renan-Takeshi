import * as colors from "colors";
import { UserAccount } from "./UserAccount";
import { Bank } from "./Bank";

const getBalance = (name: string, cpf: number): number | undefined => {
  const account: UserAccount | undefined = new Bank().getAccountByCpfAndName(
    name,
    cpf
  );
  if (account) {
    console.log(
      colors.green.bgBlack.bold(
        `Account balance: R$${account.getBalance().toFixed(2)}`
      )
    );
    return account.getBalance();
  }
  console.log(colors.red.bgBlack.bold("Invalid customer information"));
  return;
};

export default getBalance;
