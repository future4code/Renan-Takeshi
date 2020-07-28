type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

// item A) Executaria o comando tsc
// item B) tsc src/
// item C) Sim, criando um arquivo tsconfig.json contendo os pares:
//         "include": [<pastas-com-arquivos-para-transpilar>]
//         "outDir" : "<pasta-destino-dos-arquivos-transpilados>"
// item D) incremental: pelo que entendi o tsc vai guardar informacoes de compilacoes
//                      anteriores e soh vai compilar o que ainda nao foi compilado.
//         target: estamos usando "es6", que nao consta no arquivo mostrado no notion
//                 mas suponho que seja igual "ES2015"
//         allowSyntheticDefaultImports: parece interessante para continuarmos utilizando
//                                       import como estavamos acostumados
//         outFile: concatenar a saida em um unico pode ser util
//         diagnostics: mostra varias informacoes da compilacao, tempo total, por exemplo
