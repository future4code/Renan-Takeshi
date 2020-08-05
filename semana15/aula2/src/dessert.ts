import { Dish, DishTypes } from "./dish";

export class Dessert extends Dish {
  public slicesNumber: number;
  constructor(
    name: string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number,
    slicesNumber: number
  ) {
    super(name, price, cost, ingredients, timeToCook, DishTypes.SWEET);
    this.slicesNumber = slicesNumber;
  }

  public getPrice = (): number => this.price / this.slicesNumber;
}
