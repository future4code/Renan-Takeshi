import { Place } from "./place";

export class Residence extends Place {
  constructor(protected residentsQuantity: number, cep: string) {
    super(cep);
  }

  getResidentsQuantity = (): number => this.residentsQuantity;
  setResidentsQuantity = (value: number): void => {
    this.residentsQuantity = value;
  };
}
