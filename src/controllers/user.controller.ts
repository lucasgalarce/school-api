import { Request, Response } from "express";

import userService from "../services/user.service";
import { UserBody } from "../types/User.types";

const userController = {
  async createUser(req: Request<unknown, unknown, UserBody>, res: Response) {
    const { firstname, lastname, email, password } = req.body;
    await userService.createUser(firstname, lastname, email, password);
    return res.status(204).send();
  },
};

export default userController;
