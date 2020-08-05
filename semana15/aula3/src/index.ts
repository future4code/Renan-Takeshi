import { Client } from "./client";
import { Residence } from "./residence";
import { Commerce } from "./commerce";
import { Industry } from "./industry";
import { ClientManager } from "./clientManager";
import { ResidentialClient } from "./residentialClient";
import { CommercialClient } from "./commercialClient";
import { IndustrialClinet } from "./industrialClient";

// exercicio 1
// Foi possivel imprimir todas as propriedades pois uma interface nao possuiu encapsulamento
const client: Client = {
  name: "Jao",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => 2,
};
console.log(
  client.name,
  client.registrationNumber,
  client.consumedEnergy,
  client.calculateBill()
);

// exercicio 2
// item A)
// Cannot create an instance of an abstract class.

// item B)
// Precisariamos implementa-la em outra subclasse

// exercicio 3
const casa: Residence = new Residence(2, "12345-55");
const comercio: Commerce = new Commerce(3, "54321-11");
const industria: Industry = new Industry(4, "09876-66");

console.log(casa.getCep());
console.log(comercio.getCep());
console.log(industria.getCep());

// exercicio 4
// propriedade: herdados de Client: name, registrationNumber, consumedEnergy
//              herdado de Place: cep
//              herdado de Residence: residentsQuantity
//              exclusivo da ResidentialClient: cpf
// metodos:     herdados de Client: calculateBill
//              herdado de Place: getCep
//              herdado de Residence: getResidentsQuantity
//              exclusivo da ResidentialClient: getCpf

// exercicio 5
// item A) Ambas sao subclasse de Place e implementam Client
// item B) Uma tem cnpj e a outra tem cpf. Os multiplicadores de energia sao diferentes.

// exercicio 6
// item A) Ela deve ser subclasse de Industry e implementar Client, pois ela representa um cliente industrial
// item B) Implementa Client, pois representa um cliente industrial
// item C) Porque sao valores que nao devem ser alterados

// exercicio 7

// exercicio 8
const clientManager: ClientManager = new ClientManager();
const residentialClient: ResidentialClient = new ResidentialClient(
  "Cliente residencial",
  111,
  100,
  "111.111.111-11",
  2,
  "11111-11"
);
const commercialClient: CommercialClient = new CommercialClient(
  "Cliente comercial",
  222,
  100,
  "22.222.222/2222-22",
  3,
  "22222-222"
);
const industrialClient: IndustrialClinet = new IndustrialClinet(
  "Cliente industrial",
  333,
  100,
  "333/333.33-33",
  1,
  "33333-333"
);
clientManager.registerClient(residentialClient);
clientManager.registerClient(commercialClient);
clientManager.registerClient(industrialClient);

console.log(
  "Residential client bill: ",
  clientManager.calculeteBillOfClient(111)
);
console.log(
  "Commercial client bill: ",
  clientManager.calculeteBillOfClient(222)
);
console.log(
  "Industrial client bill: ",
  clientManager.calculeteBillOfClient(333)
);
console.log("Total Income: ", clientManager.calculateTotalIncome());
