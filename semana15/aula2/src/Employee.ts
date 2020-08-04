import { User } from "./User";

export class Employee extends User {
  protected admissionDate: Date;
  protected baseSalary: number;

  static BENEFITS_VALUE: number = 400;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: Date,
    baseSalary: number
  ) {
    super(id, email, name, password);
    this.admissionDate = admissionDate;
    this.baseSalary = baseSalary;
  }

  public getAdmissionDate(): Date {
    return this.admissionDate;
  }

  public getBaseSalary(): number {
    return this.baseSalary;
  }

  public calculateTotalSalary = (): number =>
    this.baseSalary + Employee.BENEFITS_VALUE;
}
