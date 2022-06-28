import { inject, injectable } from 'tsyringe';

import { IUser } from '../infra/mongoose/models/User';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class ListUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<IUser[]> {
    const usersList = await this.usersRepository.list();

    return usersList;
  }
}

export default ListUsersService;
