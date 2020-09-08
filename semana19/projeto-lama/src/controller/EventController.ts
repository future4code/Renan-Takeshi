import { Request, Response } from "express";
import { EventBusiness } from "../business/EventBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { Event, EventInputDTO } from "../model/Event";
import { EventDatabase } from "../data/EventDatabase";

export class EventController {
  async createEvent(req: Request, res: Response) {
    try {
      const input: EventInputDTO = req.body;

      const eventBusiness = new EventBusiness(
        new Authenticator(),
        new IdGenerator(),
        new EventDatabase()
      );
      await eventBusiness.createEvent(
        req.headers.authorization as string,
        input
      );

      res.status(200).send({ sucess: true });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }

  async getEventsByWeekday(req: Request, res: Response) {
    try {
      const eventBusiness = new EventBusiness(
        new Authenticator(),
        new IdGenerator(),
        new EventDatabase()
      );
      const events = await eventBusiness.getEventsByWeekday(
        req.params.weekday as string
      );

      res.status(200).send({ events });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }

  //   async getBandByNameOrId(req: Request, res: Response) {
  //     try {
  //       const { name, id } = req.body;

  //       const bandBusiness = new BandBusiness(
  //         new Authenticator(),
  //         new IdGenerator(),
  //         new BandDatabase()
  //       );
  //       const band: Band = await bandBusiness.getBandByNameOrId(name, id);

  //       res.status(200).send({ band });
  //     } catch (error) {
  //       res.status(400).send({ error: error.message });
  //     }

  //     await BaseDatabase.destroyConnection();
  //   }
}
