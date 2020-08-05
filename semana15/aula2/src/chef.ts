import { Employee } from "./employee";
import { DishTypes, Dish } from "./dish";
import { SaltyDish } from "./saltydish";
import { Dessert } from "./dessert";

export class Chef extends Employee {
  public sayJob = (): void => {
    console.log("Sou Chef!");
  };

  public removeDishFromMenu = (menu: Dish[], name: string): void => {
    menu.splice(
      menu.findIndex((item) => item.getName() === name),
      1
    );
  };

  public addDishToMenu = (
    menu: Dish[],
    name: string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number,
    type: DishTypes,
    slicesNumber?: number
  ): void => {
    if (type === DishTypes.SALTY) {
      const dish = new SaltyDish(name, price, cost, ingredients, timeToCook);
      menu.push(dish);
    }
    if (type === DishTypes.SWEET) {
      const dish = new Dessert(
        name,
        price,
        cost,
        ingredients,
        timeToCook,
        slicesNumber
      );
      menu.push(dish);
    }
  };
}
