import { Router } from 'express';
import multer from 'multer';

import petsConfig from './config/petsUpload';
import PetController from './controllers/PetController';

const routes = Router();

const uploadPet = multer(petsConfig);

routes.post('/pet', uploadPet.array('files'), PetController.create);
routes.get('/pet', PetController.index);

export default routes;