import { Transaction } from "./Transaction";

export class UserAccount {
  private name: string;
  private cpf: number;
  private birthday: number;
  private balance: number;
  private transactions: any[];

  constructor(
    name: string,
    cpf: number,
    birthday: number,
    balance: number,
    transactions: any[]
  ) {
    this.name = name;
    this.cpf = cpf;
    this.birthday = birthday;
    this.balance = balance;
    this.transactions = transactions;
    console.log("Chamando o construtor da classe User");
  }

  public getName = (): string => this.name;
  public getCpf = (): number => this.cpf;
  public getBirthday = (): number => this.birthday;
  public getBalance = (): number => this.balance;
  public getTransactions = () => this.transactions;

  public addBalance = (value: number): void => {
    this.balance += value;
  };
  public addTransaction = (transaction: Transaction) => {
    this.transactions.push(transaction);
  };
  public setBalance = (balance): void => {
    this.balance = balance;
  };
}
