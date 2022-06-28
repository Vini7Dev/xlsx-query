import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class DeleteUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const userToDelte = await this.usersRepository.findById(id);
    if (!userToDelte) {
      throw new AppError('User not found', 404);
    }

    await this.usersRepository.delete(id);
  }
}

export default DeleteUserService;
