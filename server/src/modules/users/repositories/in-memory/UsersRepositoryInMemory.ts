import { IUser } from '@modules/users/infra/mongoose/models/User';
import ICreateUserDTO from '@modules/users/dto/ICreateUserDTO';
import IUsersRepository from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
  private users: IUser[] = [];

  public async findByEmail(email: string): Promise<IUser | null> {
    const findedUser = this.users.find((user) => user.email === email) || null;

    return findedUser;
  }

  public async create({ name, email, password }: ICreateUserDTO): Promise<IUser> {
    const createdUser = {
      _id: '',
      name,
      email,
      password,
      created_at: new Date(),
    } as IUser;

    this.users.push(createdUser);

    return createdUser;
  }
}

export default UsersRepositoryInMemory;
