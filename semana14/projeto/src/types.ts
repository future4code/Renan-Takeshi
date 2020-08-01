export type CustomerAccount = {
  name: string;
  cpf: number;
  birthday: number;
  balance: number;
  transactions: Transaction[];
};

export type Transaction = {
  type: TransactionsEnum;
  amount: number;
  date: number;
  description: string;
  completed: Boolean;
};

export enum TransactionsEnum {
  ADD_BALANCE = 0,
  PAY_BILL = 1,
  TRANSFER_SENT = 2,
  TRANSFER_RECEIVED = 3,
}
