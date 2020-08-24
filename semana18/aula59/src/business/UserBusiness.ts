import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {
  public async signup(
    name: string,
    email: string,
    password: string,
    role: string
  ): Promise<string> {
    if (!name || !email || !password) {
      throw new Error(
        "Insira todas as informações necessárias para o cadastro"
      );
    }

    if (password.length < 6) {
      throw new Error("A senha deve conter no mínimo seis caracteres");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    await UserDatabase.createUser(id, name, email, hashPassword, role);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id, role });

    return token;
  }

  public async login(email: string, password: string): Promise<string> {
    const user = await UserDatabase.getUserByEmail(email);

    const hashManager = new HashManager();
    const isPasswordCorrect = await hashManager.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error("Usuário ou senha errados");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
      role: user.role,
    });

    return token;
  }

  public async getAllUsers(token: string): Promise<any> {
    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    if (!authenticationData) throw new Error("Usuario precisa estar logado");

    return UserDatabase.getAllUsers();
  }

  public async deleteUser(token: string, userId: string): Promise<any> {
    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    if (!authenticationData) throw new Error("Usuario precisa estar logado");

    await UserDatabase.deleteUser(userId);
  }
}
