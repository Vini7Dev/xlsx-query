import 'reflect-metadata';
import ListUsersService from './ListUsersService';
import IUsersRepository from '../repositories/IUsersRepository';
import UsersRepositoryInMemory from '../repositories/in-memory/UsersRepositoryInMemory';

let usersRepository: IUsersRepository;
let listUsersService: ListUsersService;

describe('ListUsersService', () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory();
    listUsersService = new ListUsersService(usersRepository);
  });

  it('shoud be able to list all users', async () => {
    const firstUser = await usersRepository.create({
      name: 'Example 1',
      email: 'example1@mail.com',
      password: 'example1',
    });

    const secondUser = await usersRepository.create({
      name: 'Example 2',
      email: 'example2@mail.com',
      password: 'example2',
    });

    const usersList = await listUsersService.execute();

    expect(usersList).toHaveLength(2);
    expect(usersList[0]).toEqual(firstUser);
    expect(usersList[1]).toEqual(secondUser);
  });
});
