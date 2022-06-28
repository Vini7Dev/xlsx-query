import 'reflect-metadata';
import UsersRepositoryInMemory from '../repositories/in-memory/UsersRepositoryInMemory';
import IUsersRepository from '../repositories/IUsersRepository';
import CreateUserService from './CreateUserService';

let usersRepository: IUsersRepository;
let createUserService: CreateUserService;

describe('CreateUserService', () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory();
    createUserService = new CreateUserService(usersRepository);
  });

  it('shoud be able to create a new user', async () => {
    const newUser = {
      name: 'Example',
      email: 'example@mail.com',
      password: 'jhon123',
    };

    const createdUser = await createUserService.execute(newUser);

    expect(createdUser).toHaveProperty('_id');
  });

  it('shoud not be able to create a user with an email already exits', async () => {
    const userAlreadyExists = {
      name: 'Example',
      email: 'example@mail.com',
      password: 'jhon123',
    };

    await createUserService.execute(userAlreadyExists);

    const newUser = {
      name: 'Example with same email',
      email: 'example@mail.com',
      password: 'jhon123',
    };

    // eslint-disable-next-line no-unused-expressions
    await expect(createUserService.execute(newUser)).rejects;
  });
});
