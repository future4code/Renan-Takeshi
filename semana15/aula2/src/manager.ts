import { Cashier } from "./cashier";
import { Chef } from "./chef";
import { Employee } from "./employee";
import { EmployeeTypes } from "./employee";

export class Manager extends Cashier {
  public removeEmployee = (employees: Employee[], name: string): void => {
    employees.splice(
      employees.findIndex((item) => item.getName() === name),
      1
    );
  };

  public createEmployee = (
    employees: Employee[],
    type: EmployeeTypes,
    email: string,
    name: string,
    password: string,
    baseSalary: number
  ): void => {
    if (type === EmployeeTypes.CASHIER) {
      const newEmployee = new Cashier(
        Date.now().toString(),
        email,
        name,
        password,
        new Date(Date.now()),
        baseSalary,
        EmployeeTypes.CASHIER
      );
      employees.push(newEmployee);
    } else if (type === EmployeeTypes.CHEF) {
      const newEmployee = new Chef(
        Date.now().toString(),
        email,
        name,
        password,
        new Date(Date.now()),
        baseSalary,
        EmployeeTypes.CASHIER
      );
      employees.push(newEmployee);
    } else if (type === EmployeeTypes.MANAGER) {
      const newEmployee = new Manager(
        Date.now().toString(),
        email,
        name,
        password,
        new Date(Date.now()),
        baseSalary,
        EmployeeTypes.CASHIER
      );
      employees.push(newEmployee);
    }
  };
}
