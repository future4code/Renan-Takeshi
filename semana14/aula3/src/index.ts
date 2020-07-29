import * as moment from "moment";
moment.locale("pt-br");

// exercicio 1
type event = {
  title: string;
  description: string;
  startsAt: moment.Moment;
  finishesAt: moment.Moment;
};

const allEvents: event[] = [
  {
    title: "Reunião",
    description: "Reunião muito importante",
    startsAt: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
    finishesAt: moment("25/06/2020 16:00", "DD/MM/YYYY HH:mm"),
  },
  {
    title: "Reuniãozinha",
    description: "Reunião não muito importante",
    startsAt: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
    finishesAt: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm"),
  },
];

// exercicio 2
// item A)

const printAllEventsEx2 = (events: event[]): void => {
  events.forEach((item: event) => {
    console.log(
      `Nome: ${item.title}\nHorário de início: ${item.startsAt.format(
        "dddd, DD [de] MMMM [de] YYYY, HH:mm"
      )}\nHorário de fim: ${item.finishesAt.format(
        "DD [de] MMMM [de] YYYY, HH:mm"
      )}\nDescrição: ${item.description}`
    );
  });
};

// item B)
// A Inglaterra segue o formato DD/MM/YYYY
// entao somente os nomes do dia da semana e mes precisariam ser traduzidos.

// exercicio 3
const printAllEventsEx3 = (events: event[]): void => {
  events.forEach((item: event) => {
    const duration = item.finishesAt.diff(item.startsAt, "minutes");

    const today = moment();
    const daysUntilEvent = item.startsAt.diff(today, "days");

    console.log(
      `Nome: ${item.title}\nHorário de início: ${item.startsAt.format(
        "dddd, DD [de] MMMM [de] YYYY, HH:mm"
      )}\nHorário de fim: ${item.finishesAt.format(
        "DD [de] MMMM [de] YYYY, HH:mm"
      )}\nDescrição: ${
        item.description
      }\nDuracao: ${duration} minutos\nDias ate o evento: ${daysUntilEvent}`
    );
  });
};

// exercicio 4
const createEvent = (
  title: string,
  description: string,
  startsAt: moment.Moment,
  finishesAt: moment.Moment
): void => {
  if (!title || !description || !startsAt || !finishesAt) {
    console.log("Invalid input");
    // Esse return faz a função parar de ser rodada!
    return;
  }

  const diffStartAtAndToday = startsAt.diff(moment(), "seconds");
  const diffFinishAtAndToday = finishesAt.diff(moment(), "seconds");

  if (diffStartAtAndToday < 0 && diffFinishAtAndToday < 0) {
    console.log("Date cannot be prior to the current date");
    return;
  }

  // Variável allEvents criada no ex.1
  allEvents.push({
    title,
    description,
    startsAt,
    finishesAt,
  });
};
