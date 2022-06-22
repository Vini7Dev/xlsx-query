import { inject, injectable } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import ICreateUserDTO from '../dto/ICreateUserDTO';
import User from '../infra/mongoose/models/User';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(data: ICreateUserDTO): Promise<typeof User> {
    throw new Error('Not implemented');
  }
}

export default CreateUserService;
