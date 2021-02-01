import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CnpjsController from './app/controllers/CnpjsController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const uploads = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/cnpjs', CnpjsController.index);
routes.post('/setcnpjs', CnpjsController.encontrar);
routes.post('/getbanco', CnpjsController.getBanco);
routes.post('/gravarcnpjs', CnpjsController.gravar);

routes.post('/files', uploads.single('file'), FileController.store);

export default routes;
