import ICreateUserDTO from '@modules/users/dto/ICreateUserDTO';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '../models/User';

class UsersRepository implements IUsersRepository {
  public create(data: ICreateUserDTO): Promise<typeof User> {
    throw new Error('Not implemented');
  }
}

export default UsersRepository;
