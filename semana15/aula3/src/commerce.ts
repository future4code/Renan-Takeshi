import { Place } from "./place";

export class Commerce extends Place {
  constructor(protected floorsQuantity: number, cep: string) {
    super(cep);
  }

  getFloorsQuantity = (): number => this.floorsQuantity;
  setFloorsQuantity = (value: number): void => {
    this.floorsQuantity = value;
  };
}
