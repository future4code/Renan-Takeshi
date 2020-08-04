import { Employee } from "./Employee";

export class Seller extends Employee {
  private salesQuantity: number = 0;

  static SELLING_COMISSION: number = 5;

  public setSalesQuantity = (qnty: number): void => {
    this.salesQuantity = qnty;
  };

  public calculateTotalSalary = (): number =>
    this.baseSalary +
    Employee.BENEFITS_VALUE +
    this.salesQuantity * Seller.SELLING_COMISSION;
}
