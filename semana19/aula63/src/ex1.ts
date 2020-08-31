export interface User {
  name: string;
  balance: number;
}

export function performPurchasae(user: User, value: number): User | undefined {
  if (value <= user.balance) return { ...user, balance: user.balance - value };

  return;
}
