import CreateHourService from '@modules/hour/services/CreateHourService';
import DeleteHourService from '@modules/hour/services/DeleteHourService';
import ListHourByWeekdayService from '@modules/hour/services/ListHourByWeekdayService';
import ListHourService from '@modules/hour/services/ListHourService';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

export class HourController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { storeId } = req;
      const data = req.body;

      const service = container.resolve(CreateHourService);

      res.json(await service.execute({ ...data, store: { id: storeId } }));
    } catch (err) {
      next(err);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { storeId } = req;

      const service = container.resolve(ListHourService);

      res.json(await service.execute(+storeId));
    } catch (err) {
      next(err);
    }
  }

  async listByWeekday(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { storeId } = req;
      const { id } = req.params;

      const service = container.resolve(ListHourByWeekdayService);

      res.json(await service.execute(+storeId, +id));
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { storeId } = req;

      const service = container.resolve(DeleteHourService);

      res.json(await service.execute(+id, +storeId));
    } catch (err) {
      next(err);
    }
  }
}
