import { Place } from "./place";

export class Industry extends Place {
  constructor(protected machinesQuantity: number, cep: string) {
    super(cep);
  }

  getMachinesQuantity = (): number => this.machinesQuantity;
}
