import { Client } from "./client";
import { Industry } from "./industry";

export class IndustrialClinet extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private industryNumber: string, // tanto faz ser string ou number
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  getIndustryNumber = (): string => this.industryNumber;

  calculateBill = (): number =>
    this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
}
