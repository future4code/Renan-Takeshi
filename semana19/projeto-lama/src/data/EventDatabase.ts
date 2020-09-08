import { BaseDatabase } from "./BaseDatabase";
import { Event, EventInputDTO, EventAndBandDTO } from "../model/Event";

export class EventDatabase extends BaseDatabase {
  private static TABLE_NAME = "lama_event";

  public async isScheduleAvaliable(input: EventInputDTO): Promise<boolean> {
    try {
      const response = await this.getConnection().raw(`
        SELECT COUNT(1) AS count 
        FROM ${EventDatabase.TABLE_NAME}
        WHERE week_day = '${input.weekDay}'
        AND ((start_time BETWEEN ${input.startTime} AND ${input.endTime - 1}) 
            OR (end_time BETWEEN ${input.startTime + 1} AND ${input.endTime}))
     `);
      return !Boolean(response[0][0].count);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async createEvent(id: string, input: EventInputDTO): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          week_day: input.weekDay,
          start_time: input.startTime,
          end_time: input.endTime,
          band_id: input.bandId,
        })
        .into(EventDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getEventsByWeekday(weekday: string) {
    try {
      const events = await this.getConnection()
        .select(
          "e.id",
          "e.week_day as weekDay",
          "e.start_time as startTime",
          "e.end_time as endTime",
          "b.name",
          "b.music_genre"
        )
        .from({ e: EventDatabase.TABLE_NAME })
        .join({ b: "lama_band" }, { "e.band_id": "b.id" })
        .where({ week_day: weekday })
        .orderBy("e.start_time", "asc");

      return events;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
