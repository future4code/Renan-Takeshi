import { Chef } from "./chef";
import { Dish, DishTypes } from "./dish";
import { Employee, EmployeeTypes } from "./employee";
import { Cashier } from "./cashier";
import { Manager } from "./manager";

let menu: Dish[] = [];
let employees: Employee[] = [];
let bills: number[] = [1, 2, 3, 4];

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

// chef.removeDishFromMenu(menu, "Burger");

console.log("Quantidade de funcionarios: ", Employee.EMPLOYEE_COUNT);
menu.forEach((item) => {
  console.log(item.getName());
});

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
employees.forEach((item) => console.log(item.getName()));
manager.removeEmployee(employees, "Cashier");
employees.forEach((item) => console.log(item.getName()));

console.log(
  new Cashier(
    Date.now().toString(),
    "manager@manager",
    "Manager",
    "manager",
    new Date(Date.now()),
    80,
    EmployeeTypes.MANAGER
  ).calculateBill(menu)
);
console.log(menu);
