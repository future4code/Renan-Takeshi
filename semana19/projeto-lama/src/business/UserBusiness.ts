import { UserInputDTO, LoginInputDTO } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private userDatabase: UserDatabase,
    private authenticator: Authenticator
  ) {}
  async createUser(user: UserInputDTO) {
    const id = this.idGenerator.generate();

    const hashPassword = await this.hashManager.hash(user.password);

    await this.userDatabase.createUser(
      id,
      user.email,
      user.name,
      hashPassword,
      user.role
    );

    const accessToken = this.authenticator.generateToken({
      id,
      role: user.role,
    });

    return accessToken;
  }

  async getUserByEmail(user: LoginInputDTO) {
    const userFromDB = await this.userDatabase.getUserByEmail(user.email);

    const hashCompare = await this.hashManager.compare(
      user.password,
      userFromDB.getPassword()
    );

    const accessToken = this.authenticator.generateToken({
      id: userFromDB.getId(),
      role: userFromDB.getRole(),
    });

    if (!hashCompare) {
      throw new Error("Invalid Password!");
    }

    return accessToken;
  }
}
