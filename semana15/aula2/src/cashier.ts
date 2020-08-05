import { Employee } from "./employee";
import { Dish } from "./dish";

export class Cashier extends Employee {
  public sayJob = (): void => {
    console.log("Sou caixa");
  };

  public calculateBill = (dishes: Dish[]): number =>
    dishes.reduce((acc, cur) => acc + cur.getPrice(), 0);
}
