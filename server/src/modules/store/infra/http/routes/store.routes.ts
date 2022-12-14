import { AuthController } from '@modules/auth/AuthController';
import createStoreSchema from '@modules/store/schemas/create-store.schema';
import updateStoreSchema from '@modules/store/schemas/update-store.schema';
import storeAuth from '@shared/infra/http/middlewares/storeAuth';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import StoreController from '../controllers/StoreController';

const storeRoutes = Router();
const storeController = new StoreController();
const authController = new AuthController();

storeRoutes.post(
  '/',
  [celebrate({ [Segments.BODY]: createStoreSchema })],
  storeController.create
);

storeRoutes.post('/login', storeController.login);
storeRoutes.put(
  '/',
  storeAuth,
  [celebrate({ [Segments.BODY]: updateStoreSchema })],
  storeController.update
);

storeRoutes.get('/authenticate', authController.VerifyStoreToken);
export { storeRoutes };
