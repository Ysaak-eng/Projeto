import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}
const user = new User();
class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    if (!user_id) {
      throw new Error("Esse usuario não existes !");
    }
    this.usersRepository.turnAdmin(user_id);
    // eslint-disable-next-line no-useless-return
    return;
  }
}

export { TurnUserAdminUseCase };
