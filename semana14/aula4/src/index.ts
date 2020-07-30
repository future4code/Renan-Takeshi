import axios from "axios";
import * as moment from "moment";

moment.locale("pt-br");

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
type User = {
  id: string;
  name: string;
  email: string;
};

// item A)
// Nao recebi erro de tipagem

// item B)
//

// item C)
const arrowGetSubscribersTypeUser = async (): Promise<User[]> => {
  const res = await axios.get(baseUrl + "subscribers/all");
  return res.data;
};

// exercicio 4
// item A)
// void, pois nao retorna nada e nao recebe resposta

// item B)
const createNewItem = (title: string, content: string): void => {
  axios.put(baseUrl + "news", { title, content, date: Date.now() });
};

// exercicio 5
// item A)

// item B)
const sendNotifications = (users: User[], message: string): void => {
  for (let user of users) {
    axios.post(baseUrl + "notifications/send", {
      subscriberId: user.id,
      message,
    });
  }
};

// exercicio 6
// item A)
// Promise.all returna um um array com o resultado das promises passadas como argumento

// item B)
const sendNotificationsWithPromiseAll = async (
  users: any[],
  message: string
): Promise<void> => {
  const promisesArray: any[] = [];

  for (let user of users) {
    promisesArray.push(
      axios.post(baseUrl + "notifications/send", {
        subscriberId: user.id,
        message,
      })
    );
  }

  await Promise.all(promisesArray);
};

// exercicio 7
// item A)
const signup = (name: string, email: string): void => {
  axios.put(baseUrl + "subscribers", { name, email });
};

// item B)
const createNewAndSendNotifications = async (
  title: string,
  content: string
): Promise<void> => {
  try {
    await axios.put(baseUrl + "news", { title, content, date: Date.now() });
    sendNotificationsWithPromiseAll(
      await getSubscribers(),
      `Nova noticia: ${title}`
    );
  } catch (error) {
    console.log("ops!", error.message);
  }
};

// item C)
const getEveryoneNotifications = async () => {
  const users = await getSubscribers();
  const promisesArray: any[] = [];

  for (let user of users) {
    promisesArray.push(
      axios.get(baseUrl + `subscribers/${user.id}/notifications/all`)
    );
  }
  const res = await Promise.all(promisesArray);

  res.forEach((item) => console.log(item.data));
};
// subscribers/:id/notifications/all
// main
// (async () => {
//   sendNotificationsWithPromiseAll(
//     await getSubscribers(),
//     `Renan mandou um 'Olar!' no dia ${moment().format(
//       "DD [de] MMMM [as] HH:mm"
//     )}`
//   );
// })();
// (async () => {
//   createNewAndSendNotifications("Renan testando", "Oie");
// })();
(async () => {
  getEveryoneNotifications();
})();
