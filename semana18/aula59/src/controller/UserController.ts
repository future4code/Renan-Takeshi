import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
export class UserController {
  async signup(req: Request, res: Response) {
    const userBusiness: UserBusiness = new UserBusiness();
    try {
      const { name, email, password, role } = req.body;

      const token = await userBusiness.signup(name, email, password, role);

      res.status(200).send({ token });
    } catch (e) {
      res.status(400).send({ message: e.sqlMessage || e.message });
    }
  }

  // async approve(req: Request, res: Response) {
  //     const userBusiness: UserBusiness = new UserBusiness();
  //     try {
  //         const id = req.body.id

  //         await userBusiness.approve(id);

  //         res.status(200).send({ message: "Usuário aprovado" });

  //     } catch (err) {
  //         res.status(400).send({ error: err.message });
  //     }
  // }

  async getUserById(req: Request, res: Response) {
    const userBusiness: UserBusiness = new UserBusiness();
    try {
      const id = req.params.id;
      const result = await userBusiness.getUserProfile(id);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  }
}
