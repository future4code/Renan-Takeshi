import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { BandInputDTO, Band } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";

export class BandController {
  async createBand(req: Request, res: Response) {
    try {
      const input: BandInputDTO = req.body;

      const bandBusiness = new BandBusiness(
        new Authenticator(),
        new IdGenerator(),
        new BandDatabase()
      );
      await bandBusiness.createBand(req.headers.authorization as string, input);

      res.status(200).send({ sucess: true });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }

  async getBandByNameOrId(req: Request, res: Response) {
    try {
      const { name, id } = req.body;

      const bandBusiness = new BandBusiness(
        new Authenticator(),
        new IdGenerator(),
        new BandDatabase()
      );
      const band: Band = await bandBusiness.getBandByNameOrId(name, id);

      res.status(200).send({ band });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}
