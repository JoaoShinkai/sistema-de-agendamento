import daysOfTheWeekRoutes from '@modules/daysOfTheWeek/infra/http/controllers/routes/days-of-the-week.routes';
import { employeeRoutes } from '@modules/employee/infra/http/routes/employee.routes';
import { hourRoutes } from '@modules/hour/infra/http/routes/hour.routes';
import { storeRoutes } from '@modules/store/infra/http/routes/store.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/store', storeRoutes);
routes.use('/employee', employeeRoutes);
routes.use('/hour', hourRoutes);
routes.use('/weekday', daysOfTheWeekRoutes);

export { routes };
