import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    if (!user_id) {
      throw new Error("Não é um adm");
    }
    const list = this.usersRepository.list();
    // eslint-disable-next-line no-useless-return
    return;
  }
}

export { ListAllUsersUseCase };
