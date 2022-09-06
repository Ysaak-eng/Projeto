import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;
    if (!name) {
      throw new Error("Esse usuario já existe");
    }
    this.createUserUseCase.execute(name);
    // eslint-disable-next-line no-useless-return
    return;
  }
}

export { CreateUserController };
