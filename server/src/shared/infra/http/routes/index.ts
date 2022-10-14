import { storeRoutes } from '@modules/store/infra/http/routes/store.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/store', storeRoutes);

export { routes };
