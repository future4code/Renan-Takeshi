import { UserAccount } from "./UserAccount";
import { JSONFileManager } from "./JSONFileManager";

export class Bank {
  private accounts: UserAccount[];
  private fileManager: JSONFileManager = new JSONFileManager("./data.json");

  public createAccount = (userAccount: UserAccount): void => {
    const accounts: UserAccount[] = this.getAllAccounts();
    accounts.push(userAccount);
    this.fileManager.writeToDatabase(accounts);
  };

  public getAllAccounts = (): UserAccount[] => {
    const accounts: any[] = this.fileManager.readDatabase();
    return accounts.map(
      (item) =>
        new UserAccount(
          item.name,
          item.cpf,
          item.birthday,
          item.balance,
          item.transactions
        )
    );
  };

  public getAccountByCpfAndName = (
    name: string,
    cpf: number
  ): UserAccount | undefined =>
    this.getAllAccounts().find(
      (item) => item.getName() === name && item.getCpf() === cpf
    );
}
