enum Descontos {
  VERAO = 0.05,
  INVERNO = 0.1,
  BANHO = 0.04,
  INTIMAS = 0.07,
}

type produto = { nome: string; preco: number; classificacao: string };
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
      precoComDesconto: cur.preco * (1 - Descontos[cur.classificacao]),
    };
    acc.push(produtoComDesconto);
    return acc;
  }, []);

const novo: produto = { nome: "oi", preco: 10, classificacao: "BANHO" };
console.log(calculaDesconto([novo]));
