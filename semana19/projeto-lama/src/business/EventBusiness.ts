import { WEEKDAY, EventInputDTO } from "../model/Event";
import { EventDatabase } from "../data/EventDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { UserRole } from "../model/User";

export class EventBusiness {
  constructor(
    private authenticator: Authenticator,
    private idGenerator: IdGenerator,
    private eventDatabase: EventDatabase
  ) {}
  async createEvent(token: string, event: EventInputDTO) {
    const authenticationData = this.authenticator.getData(token);

    if (authenticationData.role.toUpperCase() !== UserRole.ADMIN) {
      throw new Error("Validacao de admin");
    }

    if (
      !Object.values(WEEKDAY).includes(event.weekDay.toUpperCase() as WEEKDAY)
    ) {
      throw new Error("Validacao de dia da semana");
    }

    if (
      !Number.isInteger(event.startTime) ||
      !Number.isInteger(event.endTime)
    ) {
      throw new Error("Validacao de hora cheia");
    }

    if (event.startTime >= event.endTime) {
      throw new Error("Intervalo invalido");
    }

    if (event.startTime < 8 || event.startTime > 22) {
      throw new Error("Horario inicio invalido");
    }

    if (event.endTime < 9 || event.endTime > 23) {
      throw new Error("Horario termino invalido");
    }

    if (!(await this.eventDatabase.isScheduleAvaliable(event))) {
      throw new Error("Horario indisponivel");
    }

    const id = this.idGenerator.generate();

    await this.eventDatabase.createEvent(id, event);
  }

  async getEventsByWeekday(weekday: string) {
    if (!Object.values(WEEKDAY).includes(weekday.toUpperCase() as WEEKDAY)) {
      throw new Error("Validacao de dia da semana");
    }
    return this.eventDatabase.getEventsByWeekday(weekday);
  }
}
