enum Descontos {
  VERAO = 0.05,
  INVERNO = 0.1,
  BANHO = 0.04,
  INTIMAS = 0.07,
}

type produto = {
  nome: string;
  preco: number;
  classificacao: string;
};

type produtoComDesconto = {
  nome: string;
  preco: number;
  classificacao: string;
  precoComDesconto: number;
};

const calculaDesconto = (arr: produto[]): produtoComDesconto[] =>
  arr.reduce((acc, cur) => {
    const produtoComDesconto: produtoComDesconto = {
      ...cur,
      precoComDesconto:
        cur.preco *
        (1 - Descontos[cur.classificacao as keyof typeof Descontos]),
    };
    acc.push(produtoComDesconto);
    return acc;
  }, []);

const novo: produto = { nome: "oi", preco: 10, classificacao: "BANHO" };
const novo2: produto = { nome: "oie", preco: 100, classificacao: "INVERNO" };

console.log(calculaDesconto([novo, novo2]));
