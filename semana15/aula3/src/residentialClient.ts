import { Client } from "./client";
import { Residence } from "./residence";

export class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
    if (!cpf.match(/^\d{3}.\d{3}.\d{3}-\d{2}$/)) {
      throw "CPF invalido";
    }
  }

  getCpf = (): string => this.cpf;

  calculateBill = (): number => this.consumedEnergy * 0.75;
}
