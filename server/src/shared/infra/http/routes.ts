import { Router } from 'express';

import userRoutes from '@modules/users/infra/http/routes/user.routes';

const appRoutes = Router();

appRoutes.use('/users', userRoutes);

export default appRoutes;
