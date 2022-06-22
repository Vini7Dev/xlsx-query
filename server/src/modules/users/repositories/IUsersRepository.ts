import ICreateUserDTO from '../dto/ICreateUserDTO';
import User from '../infra/mongoose/models/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<typeof User>;
}

export default IUsersRepository;
