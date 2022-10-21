import storeAuth from '@shared/infra/http/middlewares/storeAuth';
import { Router } from 'express';
import DaysOfTheWeekController from '../DaysOfTheWeekController';

const daysOfTheWeekRoutes = Router();
const daysOfTheWeekController = new DaysOfTheWeekController();

daysOfTheWeekRoutes.get('/', storeAuth, daysOfTheWeekController.list);

export default daysOfTheWeekRoutes;
