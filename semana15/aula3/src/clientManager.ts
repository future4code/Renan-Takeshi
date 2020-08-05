import { Client } from "./client";

export class ClientManager {
  private clients: Client[] = [];

  getClientsQuantity = (): number => this.clients.length;

  calculateTotalIncome = (): number =>
    this.clients.reduce((arr, cur) => arr + cur.calculateBill(), 0);

  calculeteBillOfClient = (registrationNumber: number): number => {
    const client = this.clients.find(
      (item) => item.registrationNumber === registrationNumber
    );
    if (client) return client.calculateBill();
    return 0;
  };

  deleteUser = (registrationNumber: number): void => {
    const regIdx = this.clients.findIndex(
      (item) => item.registrationNumber === registrationNumber
    );

    if (regIdx !== -1) this.clients.splice(regIdx, 1);
  };

  registerClient = (client: Client): void => {
    this.clients.push(client);
  };
}
