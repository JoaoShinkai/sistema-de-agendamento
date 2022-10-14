import createEmployeeSchema from '@modules/employee/schemas/create-employee.schema';
import storeAuth from '@shared/infra/http/middlewares/storeAuth';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import EmployeeController from '../controllers/EmployeeController';

const employeeRoutes = Router();
const employeeController = new EmployeeController();

employeeRoutes.post(
  '/',
  storeAuth,
  [celebrate({ [Segments.BODY]: createEmployeeSchema })],
  employeeController.create
);

employeeRoutes.get('/', storeAuth, employeeController.list);

export { employeeRoutes };
