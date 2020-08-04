export class Transaction {
  private type: TransactionsEnum;
  private amount: number;
  private date: number;
  private description: string;
  private completed: Boolean;

  constructor(
    type: TransactionsEnum,
    amount: number,
    date: number,
    description: string,
    completed: boolean
  ) {
    this.type = type;
    this.amount = amount;
    this.date = date;
    this.description = description;
    this.completed = completed;
  }
}

export enum TransactionsEnum {
  ADD_BALANCE = 0,
  PAY_BILL = 1,
  TRANSFER_SENT = 2,
  TRANSFER_RECEIVED = 3,
}
