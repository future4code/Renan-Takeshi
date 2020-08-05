import { Client } from "./client";
import { Commerce } from "./commerce";

export class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }

  getCnpj = (): string => this.cnpj;

  calculateBill = (): number => this.consumedEnergy * 0.53;
}
