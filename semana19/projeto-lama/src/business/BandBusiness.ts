import { BandInputDTO, Band } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { UserRole } from "../model/User";

export class BandBusiness {
  constructor(
    private authenticator: Authenticator,
    private idGenerator: IdGenerator,
    private bandDatabase: BandDatabase
  ) {}
  async createBand(token: string, band: BandInputDTO) {
    const authenticationData = this.authenticator.getData(token);

    if (authenticationData.role?.toUpperCase() !== UserRole.ADMIN) throw "Nope";

    const id = this.idGenerator.generate();

    await this.bandDatabase.createBand(
      id,
      band.name,
      band.musicGenre,
      band.responsible
    );
  }
  async getBandByNameOrId(name: string, id: string): Promise<Band> {
    const bandFromDatabase = await this.bandDatabase.getBandByNameOrId(
      name,
      id
    );

    if (!bandFromDatabase) throw new Error("BandBusiness getBand");

    return bandFromDatabase;
  }
}
