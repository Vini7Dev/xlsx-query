import ICreateUserDTO from '../dto/ICreateUserDTO';
import { IUser } from '../infra/mongoose/models/User';

interface IUsersRepository {
  findById(id:string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  list(): Promise<IUser[]>;
  create(data: ICreateUserDTO): Promise<IUser>;
  delete(id: string): Promise<null>;
}

export default IUsersRepository;
