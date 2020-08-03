import { readDatabase } from "./fileSystem";
import { CustomerAccount } from "./types";
import { JSONFileManager } from "./JSONFileManager";

const getAllAccounts = (): CustomerAccount[] => {
  const fm = new JSONFileManager("./data.json");
  const accounts: CustomerAccount[] = fm
    .readDatabase()
    .map((item: CustomerAccount) => {
      return {
        name: item.name,
        cpf: item.cpf,
        birthday: item.birthday,
        balance: item.balance,
        transactions: item.transactions,
      };
    });
  return accounts;
};

export default getAllAccounts;
