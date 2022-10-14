import { employeeRoutes } from '@modules/employee/infra/http/routes/employee.routes';
import { storeRoutes } from '@modules/store/infra/http/routes/store.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/store', storeRoutes);
routes.use('/employee', employeeRoutes);

export { routes };
