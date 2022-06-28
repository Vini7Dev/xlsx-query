import ICreateUserDTO from '../dto/ICreateUserDTO';
import { IUser } from '../infra/mongoose/models/User';

interface IUsersRepository {
  findByEmail(email: string): Promise<IUser | null>;
  list(): Promise<IUser[]>;
  create(data: ICreateUserDTO): Promise<IUser>;
}

export default IUsersRepository;
