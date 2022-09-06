import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}
const user = new User();

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // eslint-disable-next-line no-self-compare
    if (user.email === user.email) {
      throw new Error("Erro email invalid");
    }
    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
