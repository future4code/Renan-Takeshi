export abstract class Dish {
  protected price: number;
  protected cost: number;
  protected ingredients: string[];
  protected timeToCook: number;
  protected type: DishTypes;
  protected name: string;

  constructor(
    name: string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number,
    type: DishTypes
  ) {
    this.name = name;
    this.price = price;
    this.cost = cost;
    this.ingredients = ingredients;
    this.timeToCook = timeToCook;
    this.type = type;
  }

  public getName = (): string => this.name;

  public getProfit(): number {
    return this.price - this.cost;
  }

  public abstract getPrice = (): number => this.price;
}

export enum DishTypes {
  SALTY = "Salty",
  SWEET = "Desert",
}
