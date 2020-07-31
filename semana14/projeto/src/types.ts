export type CustomerAccount = {
  name: string;
  cpf: number;
  birthday: string;
  balance: number;
  transactions: Transaction[];
};

export type Transaction = {
  type: TransactionsEnum;
  amount: number;
  date: number;
  description: string;
};

export enum TransactionsEnum {
  INCREASE_BALANCE = 0,
  PAY_BILL = 1,
  INTERNAL_TRANSFER = 2,
}
