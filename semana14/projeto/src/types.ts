export type CustomerAccount = {
  name: string;
  cpf: string;
  birthday: string;
  balance: number;
  transactions: Transaction[];
};

export type Transaction = {
  type: Transactions;
  amount: number;
  date: number;
};

export enum Transactions {
  INCREASE_BALANCE = 0,
  PAY_BILL = 1,
  INTERNAL_TRANSFER = 2,
}
