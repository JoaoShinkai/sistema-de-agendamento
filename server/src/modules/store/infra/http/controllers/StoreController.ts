import CreateStoreService from '@modules/store/services/CreateStoreService';
import LoginStoreService from '@modules/store/services/LoginStoreService';
import UpdateStoreService from '@modules/store/services/UpdateStoreService';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

export default class StoreController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = req.body;

      const service = container.resolve(CreateStoreService);

      res.json(await service.execute(data));
    } catch (err) {
      next(err);
    }
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, password } = req.body;

      const service = container.resolve(LoginStoreService);

      res.json(await service.execute(email, password));
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { storeId } = req;
      const data = req.body;

      const service = container.resolve(UpdateStoreService);

      res.json(await service.execute(+storeId, data));
    } catch (err) {
      next(err);
    }
  }
}
