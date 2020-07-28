// item A)
// Utilizamos process.argv

// item B)
const nome: string = process.argv[2];
const idade: number = Number(process.argv[3]);

console.log(`Ola, ${nome}! Voce tem ${idade} anos.`);

// item C)
console.log(
  `Ola, ${nome}! Voce tem ${idade} anos. Em sete anos voce tera ${idade + 7}`
);
