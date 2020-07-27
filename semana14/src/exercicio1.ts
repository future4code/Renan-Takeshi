// item A)
// Se eu tentar atribuir um number, recebo este erro:
// Type '1' is not assignable to type 'string'
const minhaString: string = "Oi";

// item B)
// Para aceitar string podemos fazer da seguinte forma:
// const meuNumero: number | string = 13
const meuNumero: number = 13;

// item C)
type pessoa = { nome: string; idade: number; corFavorita: Cores };

// items D & E)
enum Cores {
  VERMELHO = "vermelho",
  LARANJA = "laranja",
  AMARELO = "amarelo",
  VERDE = "verde",
  AZUL = "azul",
  INDIGO = "indigo",
  VIOLETA = "violeta",
}

const renan: pessoa = { nome: "Renan", idade: 34, corFavorita: Cores.VERDE };
const carlao: pessoa = {
  nome: "Carlao",
  idade: 37,
  corFavorita: Cores.AMARELO,
};
const bianca: pessoa = { nome: "Bianca", idade: 73, corFavorita: Cores.AZUL };
const Tais: pessoa = { nome: "Tais", idade: 13, corFavorita: Cores.INDIGO };
