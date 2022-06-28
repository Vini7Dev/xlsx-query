import CreateSectionService from '@modules/users/services/CreateSectionService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class SectionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const createSectionService = container.resolve(CreateSectionService);

    const { email, password } = req.body;

    const { token, user_id } = await createSectionService.execute({ email, password });

    return res.json({ token, user_id }).status(201);
  }
}

export default SectionsController;
