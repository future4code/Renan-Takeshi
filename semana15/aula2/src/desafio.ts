import { Chef } from "./chef";
import { Dish, DishTypes } from "./dish";
import { Employee, EmployeeTypes } from "./employee";
import { Cashier } from "./cashier";
import { Manager } from "./manager";

let menu: Dish[] = [];
let employees: Employee[] = [];

const chef = new Chef(
  Date.now().toString(),
  "chef@chef",
  "El Chef",
  "chefitos",
  new Date(Date.now()),
  100,
  EmployeeTypes.CHEF
);
employees.push(chef);
console.log("Quantidade de funcionarios: ", Employee.EMPLOYEE_COUNT);

chef.addDishToMenu(
  menu,
  "Burger",
  10,
  5,
  ["pao", "carne"],
  10,
  DishTypes.SALTY
);
chef.addDishToMenu(
  menu,
  "Pudim",
  10,
  2,
  ["leite", "ovo"],
  0,
  DishTypes.SWEET,
  8
);
console.log(menu.map((item) => item.getName()));
chef.removeDishFromMenu(menu, "Burger");
console.log(menu.map((item) => item.getName()));

const manager = new Manager(
  Date.now().toString(),
  "manager@manager",
  "Manager",
  "manager",
  new Date(Date.now()),
  80,
  EmployeeTypes.MANAGER
);
employees.push(manager);
manager.createEmployee(
  employees,
  EmployeeTypes.CASHIER,
  "cashier@cashier",
  "Cashier",
  "muchcash",
  60
);
console.log("Quantidade de funcionarios: ", Employee.EMPLOYEE_COUNT);
console.log(employees.map((item) => item.getName()));
manager.removeEmployee(employees, "El Chef");

console.log(employees.map((item) => item.getName()));

console.log("Total da conta: ", (employees[1] as Cashier).calculateBill(menu));
