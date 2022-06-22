import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const createUserService = container.resolve(CreateUserService);

    const createdUser = await createUserService.execute(req.body);

    return res.json(createdUser).status(201);
  }
}

export default UserController;
