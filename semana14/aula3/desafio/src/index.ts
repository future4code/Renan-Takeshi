import * as fs from "fs";
import moment from "moment";

moment.locale("pt-br");

type event = {
  title: string;
  description: string;
  startsAt: string;
  finishesAt: string;
};

// const allEvents: event[] = [
//   {
//     title: "Reunião",
//     description: "Reunião muito importante",
//     startsAt: "25/06/2020 15:00",
//     finishesAt: "25/06/2020 16:00",
//   },
//   {
//     title: "Reuniãozinha",
//     description: "Reunião não muito importante",
//     startsAt: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
//     finishesAt: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm"),
//   },
// ];

// [
//   {
//     "title": "Reunião",
//     "description": "Reunião muito importante",
//     "startsAt": "2020-06-25T18:00:00.000Z",
//     "finishesAt": "2020-06-25T19:00:00.000Z"
//   },
//   {
//     "title": "Reuniãozinha",
//     "description": "Reunião não muito importante",
//     "startsAt": "2020-06-26T20:00:00.000Z",
//     "finishesAt": "2020-06-26T21:00:00.000Z"
//   }
// ]

const printEvents = (day?: string, time?: string): void => {
  const events: event[] = JSON.parse(
    fs.readFileSync("./src/events.json").toString()
  );

  const filteredEvents: event[] = events.filter(
    // (item) =>
    //   item.startsAt.includes(
    //     moment(day, "DD/MM/YYYY HH:mm").toISOString().split("T")[0]
    //   )
    (item) => item.startsAt.includes(day.split("/").reverse().join("-"))
  );
  // console.log(moment(day, "DD/MM/YYYY").toISOString());

  events.forEach((item: event) => {
    const duration = moment(item.finishesAt).diff(item.startsAt, "minutes");

    const today = moment();
    const daysUntilEvent = moment(item.startsAt).diff(today, "days");

    console.log(
      `Nome: ${item.title}\nHorário de início: ${moment(item.startsAt).format(
        "dddd, DD [de] MMMM [de] YYYY, HH:mm"
      )}\nHorário de fim: ${moment(item.finishesAt).format(
        "DD [de] MMMM [de] YYYY, HH:mm"
      )}\nDescrição: ${
        item.description
      }\nDuracao: ${duration} minutos\nDias ate o evento: ${daysUntilEvent}\n`
    );
  });
};

const createEvent = (
  title: string,
  description: string,
  startsAt: string,
  finishesAt: string
): void => {
  if (!title || !description || !startsAt || !finishesAt) {
    console.log("Invalid input");
    return;
  }

  // const diffStartAtAndToday = startsAt.diff(moment(), "seconds");
  // const diffFinishAtAndToday = finishesAt.diff(moment(), "seconds");name

  // if (diffStartAtAndToday < 0 && diffFinishAtAndToday < 0) {
  // console.log("Date cannot be prior to the current date");
  //   return;
  // }

  const events: event[] = JSON.parse(
    fs.readFileSync("./src/events.json").toString()
  );

  const newEvent: any = {
    title,
    description,
    startsAt: moment(startsAt, "DD/MM/YYYY HH:mm"),
    finishesAt: moment(finishesAt, "DD/MM/YYYY HH:mm"),
  };

  events.push(newEvent);

  fs.writeFileSync("./src/events.json", JSON.stringify(events, null, 2));
};

createEvent(process.argv[2], process.argv[3], process.argv[4], process.argv[5]);
printEvents("25/06/2020", "15:00");
