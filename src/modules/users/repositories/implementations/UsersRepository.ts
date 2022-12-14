import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      admin: false,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.users.push(user);
    // eslint-disable-next-line no-useless-return
    return;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    // eslint-disable-next-line eqeqeq
    const user = this.users.find((user) => user.email == email);
    return user;
  }

  turnAdmin(receivedUser: User): User {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { admin, updated_at } = receivedUser;
    // eslint-disable-next-line no-unused-expressions, eqeqeq
    updated_at == new Date();
    // eslint-disable-next-line no-useless-return
    return;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
