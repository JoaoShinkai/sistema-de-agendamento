import StoreRepository from '@modules/store/infra/typeorm/repositories/StoreRepository';
import IStoreRepository from '@modules/store/repositories/IStoreRepository';
import { container } from 'tsyringe';

container.registerSingleton<IStoreRepository>(
  'StoreRepository',
  StoreRepository
);
