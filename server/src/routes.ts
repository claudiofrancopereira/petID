import { Router } from 'express'

import PetController from './controllers/PetController';

const routes = Router();

routes.post('/pet', PetController.create);
routes.get('/pet', PetController.index);

export default routes;