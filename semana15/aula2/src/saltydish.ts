import { Dish, DishTypes } from "./dish";

export class SaltyDish extends Dish {
  constructor(
    name: string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    super(name, price, cost, ingredients, timeToCook, DishTypes.SALTY);
  }

  public getPrice = (): number => this.price;
}
