import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews/";

// exercicio 1
// item A)
// labenews/subscribers/all

// item B)
// Promise<any[]>

// item C)
async function getSubscribers(): Promise<any[]> {
  const res = await axios.get(baseUrl + "subscribers/all");
  return res.data;
}

// main
(async () => {
  console.log(await getSubscribers());
})();

// exercicio 2
// item A)
// Uma arrow function eh declarada como:
// const nomeDaFuncao = async (<parametros>): <type do return> => <corpo da funcao>
// Um funcao nomeda eh declarada como:
// async function nomeDaFuncao (<parametros>): <type do return> {<corpo da funcao>}

// item B)
const arrowGetSubscribers = async (): Promise<any[]> => {
  const res = await axios.get(baseUrl + "subscribers/all");
  return res.data;
};

// exercicio 3
