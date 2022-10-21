import ListDaysOfTheWeekService from '@modules/daysOfTheWeek/services/ListDaysOfTheWeekService';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

export default class DaysOfTheWeekController {
  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const service = container.resolve(ListDaysOfTheWeekService);

      res.json(await service.execute());
    } catch (err) {
      next(err);
    }
  }
}
