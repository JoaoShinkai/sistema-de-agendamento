import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IStoreDTO from '../dtos/IStoreDTO';
import IStoreRepository from '../repositories/IStoreRepository';

@injectable()
export default class CreateStoreService {
  constructor(
    @inject('StoreRepository')
    private storeRepository: IStoreRepository
  ) {}

  public async execute(data: IStoreDTO): Promise<IStoreDTO> {
    const store = await this.storeRepository.findByEmail(data.email);

    if (store) {
      throw new AppError('E-mail já existente');
    }

    const password = await this.storeRepository.hashPassword(data.password);

    const newUser: IStoreDTO = data;
    newUser.password = password;

    return this.storeRepository.create(newUser);
  }
}
