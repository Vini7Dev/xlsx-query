import ICreateUserDTO from '@modules/users/dto/ICreateUserDTO';
import User from '@modules/users/infra/mongoose/models/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<typeof User>;
}

export default IUsersRepository;
