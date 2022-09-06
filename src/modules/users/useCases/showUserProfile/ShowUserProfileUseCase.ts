import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const UserId = this.usersRepository.findById(user_id);
    const { name } = UserId;
    // eslint-disable-next-line no-useless-return
    if (name) {
      throw new Error("Usario invalido");
    }
    // eslint-disable-next-line no-useless-return
    return;
  }
}

export { ShowUserProfileUseCase };
