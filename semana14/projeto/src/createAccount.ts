import { CustomerAccount } from "./types";
import * as db from "./fileSystem";
import * as moment from "moment";
import * as colors from "colors";

moment.locale("pt-br");

const createAccount = (name: string, cpf: string, birthday: string): void => {
  if (moment().diff(moment(birthday, "DD/MM/YYYY"), "years") < 18) {
    console.log(colors.red.bgBlack.bold("Invalid age"));
    return;
  }

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
  console.log(colors.green.bgBlack.bold("Account successfully created"));
};

export default createAccount;
