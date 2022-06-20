import { Router } from 'express';

import UserController from '@modules/users/infra/http/controllers/UserController';

const userRoutes = Router();

const userController = new UserController();

userRoutes.post('/', userController.create);

export default userRoutes;
