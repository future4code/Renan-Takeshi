import { CustomerAccount } from "./types";
import * as db from "./fileSystem";

const createAccount = (name: string, cpf: string, birthday: string): void => {
  const newAccount: CustomerAccount = {
    name,
    cpf,
    birthday,
    balance: 0,
    transactions: [],
  };

  const accounts = db.readDatabase();
  accounts.push(newAccount);
  db.writeToDatabase(accounts);
};

export default createAccount;
