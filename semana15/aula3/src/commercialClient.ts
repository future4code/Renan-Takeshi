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
    if (!cnpj.match(/^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}/)) {
      throw "CNPJ invalido";
    }
  }

  getCnpj = (): string => this.cnpj;

  calculateBill = (): number => this.consumedEnergy * 0.53;
}
