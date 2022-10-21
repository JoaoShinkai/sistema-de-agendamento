import { Router } from 'express';
import DaysOfTheWeekController from '../DaysOfTheWeekController';

const daysOfTheWeekRoutes = Router();
const daysOfTheWeekController = new DaysOfTheWeekController();

daysOfTheWeekRoutes.get('/', daysOfTheWeekController.list);

export default daysOfTheWeekRoutes;
