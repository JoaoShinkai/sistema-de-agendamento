import createHourSchema from '@modules/hour/schemas/create-hour.schema';
import storeAuth from '@shared/infra/http/middlewares/storeAuth';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import { HourController } from '../controllers/HourController';

const hourRoutes = Router();
const hourController = new HourController();

hourRoutes.post(
  '/',
  storeAuth,
  [celebrate({ [Segments.BODY]: createHourSchema })],
  hourController.create
);

export { hourRoutes };
