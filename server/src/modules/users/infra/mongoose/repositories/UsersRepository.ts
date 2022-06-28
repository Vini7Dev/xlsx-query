import ICreateUserDTO from '@modules/users/dto/ICreateUserDTO';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User, { IUser } from '../models/User';

class UsersRepository implements IUsersRepository {
  public async findByEmail(email: string): Promise<IUser | null> {
    const findedUser = await User.findOne({ email });

    return findedUser;
  }

  public async list(): Promise<IUser[]> {
    const usersList = await User.find();

    return usersList;
  }

  public async create({ name, email, password }: ICreateUserDTO): Promise<IUser> {
    const createdUser = await User.create({
      name,
      email,
      password,
    });

    return createdUser;
  }
}

export default UsersRepository;
