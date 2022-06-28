import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import UserController from '../controllers/UserController';

const userRoutes = Router();

const userController = new UserController();

userRoutes.get('/', userController.index);
userRoutes.post('/', userController.create);
userRoutes.delete('/', ensureAuthenticated, userController.delete);

export default userRoutes;
