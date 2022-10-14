import CreateHourService from '@modules/hour/services/CreateHourService';
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
}
