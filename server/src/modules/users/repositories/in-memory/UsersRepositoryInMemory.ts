import { IUser } from '@modules/users/infra/mongoose/models/User';
import ICreateUserDTO from '@modules/users/dto/ICreateUserDTO';
import IUsersRepository from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
  private users: IUser[] = [];

  public async findById(id: string): Promise<IUser | null> {
    const findedUser = this.users.find((user) => user.id === id);

    return findedUser || null;
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    const findedUser = this.users.find((user) => user.email === email) || null;

    return findedUser;
  }

  public async list(): Promise<IUser[]> {
    return this.users;
  }

  public async create({ name, email, password }: ICreateUserDTO): Promise<IUser> {
    const createdUser = {
      _id: this.users.length.toString(),
      name,
      email,
      password,
      created_at: new Date(),
    } as IUser;

    this.users.push(createdUser);

    return createdUser;
  }

  public async delete(id: string): Promise<void> {
    const userIndex = this.users.findIndex((user) => user.id === id);

    this.users.splice(userIndex, 1);
  }
}

export default UsersRepositoryInMemory;
