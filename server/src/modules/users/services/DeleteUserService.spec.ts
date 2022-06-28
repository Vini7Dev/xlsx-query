import AppError from '@shared/errors/AppError';
import 'reflect-metadata';

import UsersRepositoryInMemory from '../repositories/in-memory/UsersRepositoryInMemory';
import IUsersRepository from '../repositories/IUsersRepository';
import DeleteUserService from './DeleteUserService';

let usersRepository: IUsersRepository;
let deleteUserService: DeleteUserService;

describe('DeleteUserService', () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory();
    deleteUserService = new DeleteUserService(usersRepository);
  });

  it('should be able to delete a user', async () => {
    const userToDelete = await usersRepository.create({
      name: 'Example',
      email: 'example@mail.com',
      password: 'example123',
    });

    await expect(deleteUserService.execute(userToDelete.id)).toBeNull();

    const tryFindUser = await usersRepository.findById(userToDelete.id);

    expect(tryFindUser).toBeNull();
  });

  it('shoud not be able to delete a non-existent user', async () => {
    await expect(deleteUserService.execute('non-existent-id'))
      .rejects
      .toEqual(new AppError('User not found', 404));
  });
});
