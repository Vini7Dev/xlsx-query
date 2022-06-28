import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import ICreateUserDTO from '../dto/ICreateUserDTO';
import { IUser } from '../infra/mongoose/models/User';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ name, email, password }: ICreateUserDTO): Promise<IUser> {
    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new AppError('This email already exists.');
    }

    const createdUser = await this.usersRepository.create({ name, email, password });

    return createdUser;
  }
}

export default CreateUserService;
