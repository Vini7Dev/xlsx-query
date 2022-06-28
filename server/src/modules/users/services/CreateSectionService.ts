import { inject, injectable } from 'tsyringe';
import { sign } from 'jsonwebtoken';

import authConfigs from '@configs/authConfigs';
import AppError from '@shared/errors/AppError';
import ICreateSectionDTO from '../dto/ICreateSectionDTO';
import IUsersRepository from '../repositories/IUsersRepository';

interface IAuthData {
  token: string;
  user_id: string;
}

@injectable()
class CreateSectionService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ email, password }: ICreateSectionDTO): Promise<IAuthData> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user || user.password !== password) {
      throw new AppError('Invalid credentials', 401);
    }

    const { secret, expiresIn } = authConfigs.jwt;

    const token = sign({
      subject: user.id,
      expiresIn,
    }, secret, {});

    return {
      user_id: user.id,
      token,
    };
  }
}

export default CreateSectionService;
