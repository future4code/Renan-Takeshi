import { CustomerAccount } from "./types";
import * as db from "./fileSystem";
import * as colors from "colors";

const getBalance = (name: string, cpf: number) => {
  const accounts: CustomerAccount[] = db.readDatabase();
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
