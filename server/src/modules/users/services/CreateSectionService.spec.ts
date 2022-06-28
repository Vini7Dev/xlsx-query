import 'reflect-metadata';

import AppError from '@shared/errors/AppError';
import UsersRepositoryInMemory from '../repositories/in-memory/UsersRepositoryInMemory';
import IUsersRepository from '../repositories/IUsersRepository';
import CreateSectionService from './CreateSectionService';

let usersRepository: IUsersRepository;
let createSectionService: CreateSectionService;

describe('CreateSectionService', () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory();
    createSectionService = new CreateSectionService(usersRepository);
  });

  it('should be able to create a new section', async () => {
    const user = await usersRepository.create({
      name: 'Example',
      email: 'example@mail.com',
      password: 'example123',
    });

    const authResponse = await createSectionService.execute({
      email: 'example@mail.com',
      password: 'example123',
    });

    expect(authResponse).toHaveProperty('token');
    expect(authResponse.user_id).toEqual(user.id);
  });

  it('should not be able to create section with a non-existent email', async () => {
    await expect(
      createSectionService.execute({ email: 'non-existent-email', password: 'example123' }),
    ).rejects.toEqual(new AppError('Invalid credentials', 401));
  });

  it('should not be able to create section with invalid password', async () => {
    await usersRepository.create({
      name: 'Example',
      email: 'example@mail.com',
      password: 'example123',
    });

    await expect(
      createSectionService.execute({ email: 'example@mail.com', password: 'invalid-password' }),
    ).rejects.toEqual(new AppError('Invalid credentials', 401));
  });
});
