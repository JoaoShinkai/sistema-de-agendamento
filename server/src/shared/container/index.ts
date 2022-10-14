import { EmployeeRepository } from '@modules/employee/infra/typeorm/repositories/EmployeeRepository';
import { IEmployeeRepository } from '@modules/employee/repositories/IEmployeeRepository';
import StoreRepository from '@modules/store/infra/typeorm/repositories/StoreRepository';
import IStoreRepository from '@modules/store/repositories/IStoreRepository';
import { container } from 'tsyringe';

container.registerSingleton<IStoreRepository>(
  'StoreRepository',
  StoreRepository
);

container.registerSingleton<IEmployeeRepository>(
  'EmployeeRepository',
  EmployeeRepository
);
