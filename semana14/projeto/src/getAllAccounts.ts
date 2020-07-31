import { readDatabase } from "./fileSystem";
import { CustomerAccount } from "./types";

const getAllAccounts = (): CustomerAccount[] => {
  const accounts: CustomerAccount[] = readDatabase().map(
    (item: CustomerAccount) => {
      return {
        name: item.name,
        cpf: item.cpf,
        birthday: item.birthday,
        balance: item.balance,
        transactions: item.transactions,
      };
    }
  );
  return accounts;
};

export default getAllAccounts;
