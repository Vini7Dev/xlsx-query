import { Router } from 'express';

import userRoutes from '@modules/users/infra/http/routes/user.routes';
import sectionsRoutes from '@modules/users/infra/http/routes/sections.routes';

const appRoutes = Router();

appRoutes.use('/users', userRoutes);
appRoutes.use('/sections', sectionsRoutes);

export default appRoutes;
