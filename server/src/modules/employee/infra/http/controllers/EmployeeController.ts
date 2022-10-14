import CreateEmployeeService from '@modules/employee/services/CreateEmployeeService';
import ListEmployeeService from '@modules/employee/services/ListEmployeeService';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

export default class EmployeeController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { storeId } = req;
      const data = req.body;

      const service = container.resolve(CreateEmployeeService);

      res.json(await service.execute({ ...data, store: { id: storeId } }));
    } catch (err) {
      next(err);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { storeId } = req;

      const service = container.resolve(ListEmployeeService);

      res.json(await service.execute(+storeId));
    } catch (err) {
      next(err);
    }
  }
}
