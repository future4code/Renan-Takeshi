// item A)
// Utilizamos process.argv

// item B)
if (process.argv.length > 3) {
  const nome: string = process.argv[2];
  const idade: number = Number(process.argv[3]);

  console.log(`\x1b[33m%s\x1b[0m`, `Ola, ${nome}! Voce tem ${idade} anos.`);

  // item C)
  console.log(
    `\x1b[32m%s\x1b[0m`,
    `Ola, ${nome}! Voce tem ${idade} anos. Em sete anos voce tera ${idade + 7}`
  );
} else {
  console.log("\x1b[31m%s\x1b[0m", "Parametros incorretos!");
}
