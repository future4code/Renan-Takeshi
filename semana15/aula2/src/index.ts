import { User } from "./user";
import { Customer } from "./customer";
import { Employee } from "./employee";
import { Seller } from "./seller";

// exercicio 1
// item A
// Nao, pois eh private

// item B
new User("a", "a", "a", "a");
// Somente 1 vez

// exercicio 2
const b = new Customer("b", "b", "b", "b", "b");
// item A
// 2 vezes

// item B
// 2 vez, pois Customer eh subclasse de User e chama o construtor super

// exercicio 3
console.log(
  b.getId(),
  b.getName(),
  b.getEmail(),
  b.purchaseTotal,
  b.getCreditCard()
);
// item A
// Nao, pois eh private e nao tem um metodo get

// exercicio 4 e exercicio 5
console.log(b.introduceYourself());

// exercicio 6
// Troquei para Seller pois employee eh abstract
const e = new Seller("e", "e", "e", "e", new Date(Date.now()), 10);
// item A
// 3 vezes

// item B
// admissionDate, baseSalary, email, id, name
console.log(
  e.getAdmissionDate(),
  e.getBaseSalary(),
  e.getEmail(),
  e.getId(),
  e.getName()
);

// exercicio 7
console.log("Salario total: R$", e.calculateTotalSalary().toFixed(2));

// exercicio 8
const s = new Seller("s", "s", "s", "s", new Date(Date.now()), 10);
// item A
// id, email, name, password, admissionDate, baseSalary

// item B
// admissionDate, baseSalary, email, id, name
// Nao foi possivel imprimir password, pois eh private e nao tem um metodo get
console.log("Data de admissao: ", e.getAdmissionDate());
console.log("Salario base: R$", e.getBaseSalary().toFixed(2));
console.log("Email: ", e.getEmail());
console.log("Id: ", e.getId());
console.log("Nome: ", e.getName());

// exercicio 9
// Nao foi possivel imprimir salesQuantity, pois eh private e nao tem um metodo get
s.setSalesQuantity(10);

// exercicio 10
console.log("Salario total: R$", s.calculateTotalSalary().toFixed(2));
