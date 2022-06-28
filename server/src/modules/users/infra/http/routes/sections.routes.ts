import { Router } from 'express';

import SectionsController from '../controllers/SectionsController';

const sectionsRoutes = Router();

const sectionsController = new SectionsController();

sectionsRoutes.post('/', sectionsController.create);

export default sectionsRoutes;
