import { User } from "./user";

export abstract class Employee extends User {
  protected admissionDate: Date;
  protected baseSalary: number;
  protected type: EmployeeTypes;

  static EMPLOYEE_COUNT: number = 0;

  static BENEFITS_VALUE: number = 400;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: Date,
    baseSalary: number,
    type: EmployeeTypes
  ) {
    super(id, email, name, password);
    this.admissionDate = admissionDate;
    this.baseSalary = baseSalary;
    this.type = type;
    Employee.EMPLOYEE_COUNT++;
  }

  public getAdmissionDate(): Date {
    return this.admissionDate;
  }

  public getBaseSalary(): number {
    return this.baseSalary;
  }

  public calculateTotalSalary = (): number =>
    this.baseSalary + Employee.BENEFITS_VALUE;

  public abstract sayJob = (): void => {};
}

export enum EmployeeTypes {
  CASHIER = "cashier",
  MANAGER = "manager",
  CHEF = "chef",
}
